---
slug: estadistica-descriptiva
title: Estadística descriptiva
content: [
	{slug: "mean", title: "mean()"},
	{slug: "median", title: "median()"},
	{slug: "trim_mean", title: "trim_mean()"},
	{slug: "weighted_mean", title: "weighted_mean()"},
	{slug: "weighted_median", title: "weighted_median()"},
	{slug: "mode", title: "mode()"},
	{slug: "corr", title: "corr()"},
	{slug: "cov", title: "cov()"},
	{slug: "mean", title: "mean()"},
	{slug: "var", title: "var()"},
	{slug: "std", title: "std()"},
	{slug: "mad", title: "mad()"},
	{slug: "quantile", title: "quantile()"},
]
navigation: [
	{
		side: "left",
		title: "Exploración de datos",
		link: "exploracion-de-datos",
	},
	{
		side: "right",
		title: "Manejo de valores ausentes",	
		link: "manejo-de-valores-ausentes",
	},
]
---
## mean()
Es la suma de todos los valores numéricos divididos por el número de valores.

```python
>>> df["column_name"].mean()
# o
>>> df[["column_name_1", "column_name_2"]].mean()
```

## median()
Es el valor central de una lista de datos ordenados de menor a mayor valor.
Si hay un número impar de elementos, el valor central es el valor del medio, caso contrario el valor central es el promedio de los dos elementos centrales.

```python
>>> df["column_name"].median()
# o
>>> df[["column_name_1", "column_name_2"]].median()
```

## trim_mean()
Conocida como la media truncada. Se calcula ignorando un número fijo, en cada extremo, de valores ordenados y a continuación, se calcula el promedio de los valores restantes.

```python
>>> from scipy.stats import trim_mean
# Ignora el 10% de cada extremo
>>> trim_mean(df["column_name"], 0.1)
# o
>>> trim_mean(df[["column_name_1", "column_name_2"]], 0.1)
```

## weighted_mean()
La media ponderada es la suma de todos los valores multiplicados por cada ponderación y dividida por la suma de las ponderaciones.

```python
>>> import numpy as np
>>> np.average(df["column_name"], weights=df["other_column_name"])
```

## weighted_median()
La mediana ponderada es el valor tal que la mitad de la suma de las ponderaciones se encuentra por encima y la otra mitad por debajo de los datos ordenados.

```python
>>> import wquantiles
>>> wquantiles.median(df["column_name"], weights=df["other_column_name"])
```

## mode()

Devuelve el valor más frecuente de cada columna.

```python
>>> df.mode()
```

También, puedes especificar las columnas a utilizar.

```python
>>> df["column_name"].mode()
# o
>>> df[["column_name_1", "column_name_2"]].mode()
```

## corr()

Calcula la correlación entre las columnas numéricas del DataFrame.

```python
>>> df.corr()
```

También, puedes especificar las columnas a utilizar.

```python
>>> df[["column_name_1", "column_name_2"]].corr()
```

## cov()

Calcula la covarianza entre las columnas numéricas del DataFrame.

```python
>>> df.cov()
```

También, puedes especificar las columnas a utilizar.

```python
>>> df[["column_name_1", "column_name_2"]].cov()
```

## var()

Es el promedio del cuadrado de las desviaciones de los datos.
La varianza es sensible a los valores atípicos.

```python
>>> df["column_name"].var()
# o
>>> df[["column_name_1", "column_name_2"]].var()
```

## std()

Es la raíz cuadrada de la varianza.
La desviación estándar es sensible a los valores atípicos.

```python
>>> df["column_name"].std()
# o
>>> df[["column_name_1", "column_name_2"]].std()
```

## mad()

Para tener una estimación robusta de la variabilidad se suele aplicar la desviación absoluta mediana de la mediana. También conocida como MAD por sus siglas _median absolute deviation from the median_.

```python
>>> from statsmodels import robust
>>> robust.scale.mad(df["column_name"])
# o
>>> robust.scale.mad(df[["column_name_1", "column_name_2"]])
```

## quantile()

Devuelve el valor del cuartil especificado.

```python
>>> df["column_name"].quantile(0.25)
# o
>>> df["column_name"].quantile([0.05, 0.25, 0.5, 0.75, 0.95])
# o
>>> df[["column_name_1", "column_name_2"]].quantile(0.25)
# o
>>> df[["column_name_1", "column_name_2"]].quantile([0.05, 0.25, 0.5, 0.75, 0.95])
```


