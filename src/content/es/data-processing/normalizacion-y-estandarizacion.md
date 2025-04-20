---
slug: normalizacion-y-estandarizacion
title: Normalización y estandarización
content: [
	{slug: "min-max-scaler", title: "MinMaxScaler"},
	{slug: "manual-normalization", title: "Normalización manual"},
	{slug: "standard-scaler", title: "StandardScaler"},
	{slug: "manual-standardization", title: "Estandarización manual"},
	{slug: "robust-scaler", title: "RobustScaler"},
	{slug: "normalizer", title: "Normalizer"},
	{slug: "quantile-transformer", title: "QuantileTransformer"},
	{slug: "power-transformer", title: "PowerTransformer"},
]
navigation: [
	{
		side: "left",
		title: "Detección y tratamiento de outliers",
		link: "deteccion-y-tratamiento-de-outliers",
	},
	{
		side: "right",
		title: "Codificación de variables categorías",
		link: "codificacion-de-variables-categoricas",
	}
]
---

**¿Cuál es la diferencia entre normalización y estandarización?**

Básicamente, la normalización se refiere al escalamiento de los datos a un rango de valores específicos, mientras que la estandarización se refiere a la transformación de los datos para que tengan una distribución normal con media cero y varianza unitaria.

## MinMaxScaler

La clase `MinMaxScaler` pertenece a las clases de `scikit-learn`, que se utiliza para escalar los datos para que estén en el rango [0, 1].

```python
>>> import pandas as pd
>>> from sklearn.preprocessing import MinMaxScaler
>>> scaler = MinMaxScaler()
>>> df_scaled = scaler.fit_transform(df)
>>> df_scaled = pd.DataFrame(df_scaled, columns = df.columns)
# o
>>> df_scaled = scaler.fit_transform(df[["column_name"]])
```

## Normalización manual

```python
>>> df_norm = (df - df.min()) / (df.max() - df.min())
# o
>>> df["column_name_norm"] = (df_norm["column_name"] - df_norm["column_name"].min()) / (df_norm["column_name"].max() - df_norm["column_name"].min())
```

## StandardScaler

La clase `StandardScaler` pertenece a las clases de `scikit-learn`, que se utiliza para escalar los datos para que tengan una media cero y una varianza unitaria.

```python
>>> import pandas as pd
>>> from sklearn.preprocessing import StandardScaler
>>> scaler = StandardScaler()
>>> df_standardized = scaler.fit_transform(df)
>>> df_standardized = pd.DataFrame(df_standardized, columns = df.columns)
# o
>>> df["column_name_std"] = scaler.fit_transform(df[["column_name"]])
```

## Estandarización manual

```python
>>> df_standard = (df - df.mean()) / df.std()
# o
>>> df["column_name_standard"] = (df_standard["column_name"] - df_standard["column_name"].mean()) / df_standard["column_name"].std()
```

## RobustScaler

Escala los datos según la mediana y el rango intercuartílico, útil cuando el dataset tiene outliers.

```python
>>> import pandas as pd
>>> from sklearn.preprocessing import RobustScaler
>>> scaler = RobustScaler()
>>> df_robust_scaled = scaler.fit_transform(df)	
>>> df_robust_scaled = pd.DataFrame(df_robust_scaled, columns = df.columns)
```

## Normalizer

Normaliza las filas, no las columnas. Convierte cada fila a un vector de norma 1 (útil en datos dispersos como texto).

```python
>>> import pandas as pd
>>> from sklearn.preprocessing import Normalizer
>>> norm = Normalizer()
>>> df_normalized = norm.fit_transform(df)
>>> df_normalized = pd.DataFrame(df_normalized, columns = df.columns)
```

## QuantileTransformer

Transforma los datos a una distribución uniforme o normal utilizando cuantiles. Muy útil para normalizar las distribuciones de datos no gaussianas.

```python
>>> import pandas as pd
>>> from sklearn.preprocessing import QuantileTransformer
>>> qt = QuantileTransformer(output_distribution = "normal") # o "uniform"
>>> df_quantile_transformed = qt.fit_transform(df)
>>> df_quantile_transformed = pd.DataFrame(df_quantile_transformed, columns = df.columns)
```

## PowerTransformer

Aplica una transformación que hace que los datos se parezcan más a una distribución normal. Usa transformaciones como Yeo-Johnson o Box-Cox.

```python
>>> import pandas as pd
>>> from sklearn.preprocessing import PowerTransformer
>>> pt = PowerTransformer(method = "yeo-johnson") # o 'box-cox' si no hay ceros o negativos
>>> df_power_transformed = pt.fit_transform(df)
>>> df_power_transformed = pd.DataFrame(df_power_transformed, columns = df.columns)
```

