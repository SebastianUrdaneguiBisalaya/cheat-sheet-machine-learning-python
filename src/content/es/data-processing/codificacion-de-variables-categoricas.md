---
slug: codificacion-de-variables-categoricas
title: Codificación de variables categorías
content: [
	{slug: "convertir-caracteristicas-ordinales-a-enteros", title: "Convertir características ordinales a enteros"},
	{slug: "label-encoder", title: "LabelEncoder"},
	{slug: "one-hot-encoder", title: "OneHotEncoder"},
	{slug: "get-dummies", title: "get_dummies()"},
]
navigation: [
	{
		side: "left",
		title: "Normalización y estandarización",
		link: "normalizacion-y-estandarizacion",
	},
	{
		side: "right",
		title: "Creación de nuevas características",
		link: "creacion-de-nuevas-caracteristicas",
	}
]
---

## Convertir caracteristicas ordinales a enteros

Útil para transformar una variable categórica cuando tiene un orden lógico (por ejemplo: bajo < medio < alto), conviene convertirla manualmente a enteros y no es necesario determinar un entero específico para cada categoría, puedes empezar desde 0.

```python
# Definir el diccionario de transformación
>>>  orden = {'bajo': 0, 'medio': 1, 'alto': 2}

# Aplicar la transformación
>>> df["column_name_encoded"] = df["column_name"].map(orden) 
```

Se recomienda no utilizar este método cuando el orden de la variable no es significativo.

## LabelEncoder

Convierte las etiquetas categóricas a enteros. Ideal para variables sin orden lógico, pero cuidado porque no respeta las relaciones entre los valores.

```python
>>> from sklearn.preprocessing import LabelEncoder
>>> le = LabelEncoder()
>>> df["column_name_encoded"] = le.fit_transform(df["column_name"])
```

No se recomienda utilizar en algoritmos sensibles al orden (como regresión lineal) porque asigna números arbitrarios a las categorías.

## OneHotEncoder

Crea una columna binaria por cada categoría, esta técnica es conocida como codificación **one-hot**.

```python
>>> from sklearn.preprocessing import OneHotEncoder
>>> ohe = OneHotEncoder()
>>> onehot = ohe.fit_transform(df[["column_name"]])

# Convertir a dataframe
>>> column_names = ohe.get_feature_names_out(["column_name"])
>>> onehot_df = pd.DataFrame(onehot, columns = column_names)
```

Una de las desventajas es que puede aumentar la dimensión de los datos si hay muchas categorías.

## get_dummies()

Hace lo mismo que **OneHotEncoder**, pero de forma más rápida y conveniente dentro de _pandas_.

```python
>>> import pandas as pd
>>> df_dummies = pd.get_dummies(df, columns = ["column_name"], drop_first = True) # 'drop_first' elimina la columna original para evitar multicolinealidad en regresión
```