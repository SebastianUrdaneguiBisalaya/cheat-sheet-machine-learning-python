---
slug: deteccion-y-tratamiento-de-outliers
title: Detección y tratamiento de outliers
content: [
	{slug: "boxplot-outliers", title: "Boxplot outliers"},
	{slug: "scatter-plot-outliers", title: "Scatter plot outliers"},
	{slug: "z-score-outliers", title: "Z-score outliers"},
	{slug: "iqr", title: "IQR"},
	{slug: "isolation-forest", title: "Isolation Forest"},
	{slug: "local-outlier-factor", title: "Local Outlier Factor"},
	{slug: "clip", title: "clip()"},
	{slug: "reemplazo-de-outliers-con-la-mediana", title: "Reemplazo de outliers con la mediana"},
	{slug: "winsorization", title: "Winsorization"},
]
navigation: [
	{
		side: "left",
		title: "Manejo de valores nulos",
		link: "manejo-de-valores-nulos",
	},
	{
		side: "right",
		title: "Normalización y estandarización",
		link: "normalizacion-y-estandarizacion",
	}
]
---

## Boxplot outliers

```python
# Diagrama de caja
>>> df.boxplot(figsize = (8, 6))
# figsize = (ancho, alto)
```

## Scatter plot outliers

```python
# Gráfico de dispersión
>>> df.plot.scatter(x = "column_name_1", y = "column_name_2", figsize = (8, 6))
```

## Z-score outliers

```python
# Selecciona los valores de la columna especificada que están fuera de los 3 estándares
>>> from scipy import stats
>>> df[(np.abs(stats.zscore(df["column_name"])) > 3)]
```

## IQR

```python
>>> Q1 = df["column_name"].quantile(0.25)
>>> Q3 = df["column_name"].quantile(0.75)
>>> IQR = Q3 - Q1
>>> df[(df["column_name"] < (Q1 - 1.5 * IQR)) | (df["column_name"] > (Q3 + 1.5 * IQR))] 
```	

## Isolation Forest

Es un algoritmo de aprendizaje automático no supervisado para detectar anomalías en datos.

El algoritmo construye un bosque de árboles de aislamiento. En cada árbol, los datos se dividen aleatoriamente en dos grupos hasta que cada dato queda aislado en un nodo terminal. Las anomalías tienden a aislarse más rápidamente (con menos divisiones) que los datos normales, lo que se refleja en una menor profundidad del árbol. Por último, se calcula una puntuación de anomalía para cada dato, basada en la profundidad promedio en los árboles donde se aisla.

```python
>>> from sklearn.ensemble import IsolationForest
>>> clf = IsolationForest(contamination = "auto")
# contamination = "auto" = 0.1 por defecto
# contamination = "float" = valor especificado entre (0, 0.5]
>>> clf.fit(df[["column_name"]])
>>> df[clf.predict(df[["column_name"]]) == -1]
```

## Local Outlier Factor

```python
>>> from sklearn.neighbors import LocalOutlierFactor
>>> clf = LocalOutlierFactor(n_neighbors = 2)
>>> df[clf.fit_predict(df[["column_name"]]) == -1]
```

## clip()

`lower_limit` y `upper_limit` pueden ser derivados del análisis IQR.

```python
# Reemplaza los outliers por los límites especificados
>>> df["column_name"].clip(lower = lower_limit, upper = upper_limit)
```

## Reemplazo de outliers con la mediana

```python
# Reemplaza los outliers con la mediana
# median = df["column_name"].median()
# lower_limit = df["column_name"].quantile(0.25)
# upper_limit = df["column_name"].quantile(0.75)
>>> df["column_name"].apply(lambda x: median if x < lower_limit or x > upper_limit else x)
```

## Winsorization

```python
# Reemplaza los outlieres por percentiles
>>> from scipy.stats.mstats import winsorize
# La función reemplaza el 5% menor y el 5% mayor de los valores
# en los percentiles 5 y 95, respectivamente.
>>> winsorize(df["column_name"], limits = [0.05, 0.05])
```