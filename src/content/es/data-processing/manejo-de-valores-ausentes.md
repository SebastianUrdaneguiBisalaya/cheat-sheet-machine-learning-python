---
slug: manejo-de-valores-ausentes
title: Manejo de valores ausentes
content: [
	{slug: "dropna", title: "dropna()"},
	{slug: "fillna", title: "fillna()"},
	{slug: "replace", title: "replace()"},
	{slug: "interpolate", title: "interpolate()"},
	{slug: "simpleimputer", title: "SimpleImputer()"},
]
navigation: [
	{
		side: "left",
		title: "Estadística descriptiva",
		link: "estadistica-descriptiva",
	},
	{
		side: "right",
		title: "Detección y tratamiento de outliers",
		link: "deteccion-y-tratamiento-de-outliers",
	},
]
---


## dropna()

Una de las funciones más sencillas para tratar con los valores ausentes en un dataframa es la función `dropna()` porque elimina aquellas filas o columnas que contienen al menos un valor ausente.

```python
>>> df.dropna(axis = 0) # Elimina las filas que contienen al menos un valor ausente
>>> df.dropna(axis = 1) # Elimina las columnas que contienen al menos un valor ausente
>>> df.dropna(how = "all") # Elimina las filas o columnas donde todos los valores sean nulos
>>> df.dropna(thresh = 2) # Elimina las filas o columnas que contienen al menos dos valores ausentes
>>> df.dropna(subset = ["column_name"]) # Elimina las filas o columnas que contienen al menos un `NAN` en la columna especificada
```

## fillna()

Se utiliza para rellenar los valors `NAN` en un DataFrame con un valor específico.

```python
>>> df.fillna(0) # Rellena todos los NaN con 0
>>> df.fillna(method = "ffill") # Rellena los NaN con el último valor válido observado
>>> df.fillna(method = "bfill") # Rellena los NaN con el siguiente valor válido observado
>>> df.fillna({"column_name": 0}) # Rellena los NaN en la columna especificada con 0
>>> df.fillna(df.mean()) # Rellena los NaN con la media de cada columna
>>> df.fillna(df.median()) # Rellena los NaN con la mediana de cada columna
>>> df.fillna(df.mode().iloc[0]) # Rellena los NaN con la moda de cada columna.
```

## replace()

Se utiliza para reemplazar los valores específico en un DataFrame, incluyendo valores `NaN`.

```python
>>> df.replace(np.nan, 0) # Reemplaza todos los NaN con 0
>>> df.replace({np.nan: 0, "otro_valor": 1}) # Reemplaza múltiples valores
>>> df.replace(to_replace = [1, 2, 3], value = 0) # Reemplaza una lista de valores con un solo valor
>>> df.replace("valor_antiguo", "valor_nuevo") # Reemplaza valores específicos en columnas de texto
>>> df.replace({"column_name": np.nan}, {"column_name": 0}) # Reemplaza NaN en una columna específica.
```

## interpolate()

Es una herramienta útil para rellenar los valores `NaN` en un DataFrame o serie. A diferencia de `fillna()`, que rellena los valores `NAN` con un valor constante o un método de rellendo directo, la función `interpolate()` estima los valores faltantes basándose en los valores circundantes.

Suele utilizarse para rellenar los datos de series de tiempo, donde los valores faltantes pueden ser estimados basándose en tendencias temporales.

```python
>>> df.interpolate(method='linear') # Interpolación lineal entre puntos
>>> df.interpolate(method='time') # Interpolación basada en el tiempo (requiere índice datetime)
>>> df.interpolate(method='nearest') # Asigna el valor del punto más cercano
>>> df.interpolate(method='zero') # Reemplaza los NaN con 0
>>> df.interpolate(method='slinear') # Interpolación spline lineal
>>> df.interpolate(method='quadratic') # Interpolación spline cuadrática
>>> df.interpolate(method='cubic') # Interpolación spline cúbica
>>> df.interpolate(method='polynomial', order=2) # Interpolación polinómica de orden 2
>>> df.interpolate(method='spline', order=3) # Interpolación spline de orden 3
>>> df.interpolate(axis=0) # Interpola a lo largo de las filas
>>> df.interpolate(axis=1) # Interpola a lo largo de las columnas
>>> df.interpolate(limit=2) # Limita a 2 NaN consecutivos
>>> df.interpolate(limit_direction='forward') # Rellena hacia adelante
>>> df.interpolate(limit_direction='backward') # Rellena hacia atrás
>>> df.interpolate(limit_direction='both') # Rellena en ambas direcciones
>>> df.interpolate(limit_area='inside') # Aplica el límite solo dentro de los NaN
>>> df.interpolate(limit_area='outside') # Aplica el límite a los extremos
```

## SimpleImputer()

Es una clase de `scikit-learn` usada para imputar valores faltantes en un conjunto de datos. Una estrategia común es reemplazar los valores ausentes con la media, mediana, el valor más frecuente, o un valor constante.

```python
>>> import numpy as np
>>> import pandas as pd
>>> from sklearn.impute import SimpleImputer
>>> imr = SimpleImputer(missing_values = np.nan, strategy = "mean")
# missing_values = np.nan o pd.NA
# strategy = "mean", "median", "most_frequent" o "constant"
>>> imputed_data = imr.fit_transform(df.values)
>>> imputed_df = pd.DataFrame(imputed_data, columns = df.columns)
```

Por ejemplo, al usar `strategy = "mean"`, los valores ausentes en una columna serán reemplazados por la media de todas las observaciones de esa columna.

La clase sigue la interfaz de los transformadores de `scikit-learn`, usando los métodos `fit()` para aprender de los datos y `transform()` para aplicar los valores imputados.
