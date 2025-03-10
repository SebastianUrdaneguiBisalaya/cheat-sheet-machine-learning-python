---
slug: estadistica-descriptiva
title: Estadística descriptiva
content: [
	{slug: "mode", title: "mode()"},
	{slug: "corr", title: "corr()"},
	{slug: "cov", title: "cov()"},
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