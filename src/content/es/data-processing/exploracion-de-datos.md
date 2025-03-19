---
slug: exploracion-de-datos
title: Exploración de datos
content: [
	{slug: "head", title: "head()"},
	{slug: "tail", title: "tail()"},
	{slug: "describe", title: "describe()"},
	{slug: "info", title: "info()"},
	{slug: "sample", title: "sample()"},
	{slug: "value_counts", title: "value_counts()"},
	{slug: "nunique", title: "nunique()"},
	{slug: "unique", title: "unique()"},
	{slug: "isnull", title: "isnull()"},
	{slug: "sort_values", title: "sort_values()"},
	{slug: "memory_usage", title: "memory_usage()"},
	{slug: "select_dtypes", title: "select_dtypes()"},
]
navigation: [
	{
		side: "left",
		title: "Carga de datos",
		link: "carga-de-datos",
	},
	{
		side: "right",
		title: "Estadística descriptiva",
		link: "estadistica-descriptiva",
	},
]
---

## head()

Visualizar las primeras 5 filas del DataFrame.

```python
>>> df.head()
```



## tail()

Visualizar las últimas 5 filas del DataFrame.

```python
>>> df.tail()
```

## describe()

Genera estadísticas descriptivas para las columnas numéricas, como la media, el rango y la desviación estándar.

```python
>>> df.describe() 
```

## info()

Proporciona información detallada sobre el DataFrame, como el tipo de datos y la cantidad de valores no nulos.

```python
>>> df.info()
```

## sample()

Muestra una muestra aleatoria de las filas del DataFrame. 

La cantidad de filas puede ser especificada en el parámetro **`n`**.

```python
>>> df.sample(n=5)
```

## value_counts()

Cuenta la frecuencia de los valores en cada una de las columnas del DataFrame.

```python
>>> df.value_counts()
```

Cuenta la frecuencia de los valores en una columna específica.

```python
>>> df.value_counts(subset=["column_name"])
# o
>>> df["column_name"].value_counts()
```

## nunique()

Devuelve el número de valores únicos en cada columna.

```python
>>> df.nunique()
```

## unique()

Devuelve una lista de los valores únicos en una columna.

```python
>>> df["column_name"].unique()
```

## isnull()

Devuelve un DataFrame de valores booleanos indicando si cada valor es nulo o no.

```python
>>> df.isnull()
```

## sort_values()

Ordenar las filas en función de una columna específica.

El parámetro **`ascending`** indica si se desea ordenar de manera ascendente o descendente.

```python
>>> df.sort_values(by="column_name", ascending=False)
```

También, puedes ordenar por múltiples columnas.

```python
>>> df.sort_values(by=["column_name_1", "column_name_2"], 
...								ascending=[False, True])
```

## memory_usage()

Devuelve el uso de memoria del DataFrame en bytes, útil para optimizar el rendimiento.

El parámetro **`deep`** indica si se desea incluir el uso de memoria de las subcolumnas.

```python
>>> df.memory_usage(deep=True)
```

## select_dtypes()

Filtra las columnas en función de su tipo de datos.

El parámetro **`include`** indica si se desea incluir los tipos de datos especificados.

```python
>>> df.select_dtypes(include="number")
```

El parámetro **`exclude`** indica si se desea excluir los tipos de datos especificados.

```python
>>> df.select_dtypes(exclude="number")
```