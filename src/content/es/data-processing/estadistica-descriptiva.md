---
slug: estadistica-descriptiva
title: Estadística descriptiva
content: [
	{slug: "mean", title: "mean()"},
	{slug: "median", title: "median()"},
	{slug: "truncated_mean", title: "truncated_mean()"},
	{slug: "weighted_mean", title: "weighted_mean()"},
	{slug: "weighted_median", title: "weighted_median()"},
	{slug: "mode", title: "mode()"},
	{slug: "corr", title: "corr()"},
	{slug: "cov", title: "cov()"},
	{slug: "mean", title: "mean()"},
]
navigation: [
	{
		side: "left",
		title: "Exploración de datos",
		link: "exploracion-de-datos",
	},
	{
		side: "right",
		title: "Manejo de valores nulos",	
		link: "manejo-de-valores-nulos",
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

## truncated_mean()
Se calcula ignorando un número fijo, en cada extremo, de valores ordenados y a continuación, se calcula el promedio de los valores restantes.

```python
>>> from scipy.stats import trim_mean
# Ignora el 10% de cada extremo
>>> trim_mean(df["column_name"], 0.1)
# o
>>> trim_mean(df[["column_name_1", "column_name_2"]], 0.1)
```

## weighted_mean()
Suma de todos los valores multiplicados por cada ponderación y dividida por la suma de las ponderaciones.

```python
>>> np.average(df["column_name"], weights=df["other_column_name"])
```

## weighted_median()
Valor tal que la mitad de la suma de las ponderaciones se encuentra por encima y la otra mitad por debajo de los datos ordenados.

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
>>> df.mode(subset=["column_name"])
```

## corr()

Calcula la correlación entre las columnas numéricas del DataFrame.

```python
>>> df.corr()
```

También, puedes especificar las columnas a utilizar.

```python
>>> df.corr(x=["column_name_1", "column_name_2"], 
...					y=["column_name_3", "column_name_4"])
```

## cov()

Calcula la covarianza entre las columnas numéricas del DataFrame.

```python
>>> df.cov()
```

También, puedes especificar las columnas a utilizar.

```python
>>> df.cov(x=["column_name_1", "column_name_2"], 
...				y=["column_name_3", "column_name_4"])
```