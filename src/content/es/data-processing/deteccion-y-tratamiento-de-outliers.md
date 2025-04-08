---
slug: deteccion-y-tratamiento-de-outliers
title: Detección y tratamiento de outliers
content: [
	{slug: "boxplot-outliers", title: "Boxplot outliers"},
	{slug: "scatter-plot-outliers", title: "Scatter plot outliers"},
	{slug: "z-core-outliers", title: "Z-core outliers"},
	{slug: "iqr", title: "IQR"},
	{slug: "isolation-forest", title: "Isolation forest"},
	{slug: "local-outlier-factor", title: "Local outlier factor"},
	{slug: "limits-replace-outliers", title: "Limites replace outliers"},
	{slug: "median-outliers", title: "Median outliers"},
	{slug: "winsorization", title: "Winsorization"},
	{slug: "drop-rows-iqr-outliers", title: "Drop rows IQR outliers"},
	{slug: "drop-rows-z-core-outliers", title: "Drop rows Z-core outliers"},
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
>>> df.boxplot() # Diagrama de caja
```

## Scatter plot outliers

```python
>>> df.plot.scatter(x = "column_name_1", y = "column_name_2") # Gráfico de dispersión
```

## Z-score outliers

```python
>>> df[(np.abs(stats.zscore(df["column_name"])) > 3)] # Selecciona los valores de la columna especificada que están fuera de los 3 estándares
```

## IQR

```python
>>> Q1 = df["column_name"].quantile(0.25)
>>> Q3 = df["column_name"].quantile(0.75)
>>> IQR = Q3 - Q1
>>> df[(df["column_name"] < (Q1 - 1.5 * IQR)) | (df["column_name"] > (Q3 + 1.5 * IQR))] 
```	

## Isolation forest

```python
>>> from sklearn.ensemble import IsolationForest
>>> clf = IsolationForest(contamination = 0.1)
>>> clf.fit(df[["column_name"]])
>>> df[clf.predict(df[["column_name"]]) == -1]
```

## Local outlier factor

```python
>>> from sklearn.neighbors import LocalOutlierFactor
>>> clf = LocalOutlierFactor(contamination = 0.1)
>>> clf.fit_predict(df[["column_name"]])
>>> df[clf.fit_predict(df[["column_name"]]) == -1]
```

## Limites replace outliers

```python
>>> df["column_name"].clip(lower = lower_limit, upper = upper_limit) # Reemplaza los outliers por los límites especificados
```

## Median outliers

```python
>>> df["column_name"].replace(outliers, df["column_name"].median()) # Reemplaza los outliers con la mediana
```

## Winsorization

```python
>>> from scipy.stats.mstats import winsorize
>>> winsorize(df["column_name"], limits = [0.05, 0.95]) # Reemplaza los outlieres por percentiles
```

## Drop rows IQR outliers

```python
>>> df = df[~((df["column_name"] < (Q1 - 1.5 * IQR)) | (df["column_name"] > (Q3 + 1.5 * IQR)))] # Elimina filas con outliers (IQR)
```

## Drop rows Z-core outliers

```python
>>> df = df[(np.abs(stats.zscore(df["column_name"])) < 3)] # Elimina filas con outliers (Z-score)
```