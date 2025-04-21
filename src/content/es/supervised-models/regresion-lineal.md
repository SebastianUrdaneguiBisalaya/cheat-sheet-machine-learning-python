---
slug: regresion-lineal
title: Regresión Lineal
content: [
	{slug: "regresion-lineal-simple-con-sklearn", title: "Regresión Lineal Simple con Scikit-Learn"},
	{slug: "regresion-lineal-simple-con-statsmodels", title: "Regresión Lineal Simple con Statsmodels"},
	{slug: "regresion-lineal-multiple-con-sklearn", title: "Regresión Lineal Múltiple con Scikit-Learn"},
	{slug: "regresion-lineal-multiple-con-statsmodels", title: "Regresión Lineal Múltiple con Statsmodels"},
]
navigation: [
	{
		side: left,
		title: "Gradient Boosting",
		link: "gradient-boosting"
	},
	{
		side: right,
		title: "Regresión Polinómica",
		link: "regresion-polinomica"
	}
]
---

## Regresión Lineal Simple con Scikit-Learn

La regresión lineal simple proporciona un modelo de la relación entre la magnitud de una variable **"y"** y otra variable **"x"**.

Por ejemplo, a medida que **X** aumenta, también **Y** aumenta. O a medida que **X** aumenta, **Y** disminuye.

La regresión cuantifica la naturaleza de la relación entre **X** y **Y**.

```python
>>> from sklearn.linear_model import LinearRegression
>>> model = LinearRegression()
>>> model.fit(df_train[["column_predictor"]], df_train[["column_outcome"]])
>>> print(f"Intercepto: {model.intercept_}")
>>> print(f"Coeficientes: {model.coef_}")

# Conocer los valores ajustados o también llamados pronósticos
>>> fitted_values = model.predict(df_train[["column_predictor"]])

# Conocer los errores del pronóstico
>>> residuals = df_train[["column_outcome"]] - fitted_values
```

## Regresión Lineal Simple con Statsmodels

```python
>>> import matplotlib.pyplot as plt
>>> import statsmodels.api as sm
>>> X = sm.add_constant(df_train["column_predictor"])
>>> model = sm.OLS(df_train["column_outcome"], X)
>>> results = model.fit()

# Imprimir el resumen del modelo
>>> print(results.summary())

# Realizar predicciones
>>> predictions = results.predict(X)

# Visualizar los resultados
>>> plt.scatter(df_train['column_predictor'], df_train['column_outcome'], label='Datos de entrenamiento')
>>> plt.plot(df_train['column_predictor'], predictions, color='red', label='Regresión lineal (entrenamiento)')
>>> plt.xlabel('column_predictor')
>>> plt.ylabel('column_outcome')
>>> plt.legend()
>>> plt.show()
```

## Regresión Lineal Múltiple con Scikit-Learn

```python
>>> from sklearn.linear_model import LinearRegression
>>> predictor_names = ["column_predictor_1", "column_predictor_2", "column_predictor_3"]
>>> outcome_name = "column_outcome"
>>> model = LinearRegression()
>>> model.fit(df_train[predictor_names], df_train[outcome_name])

# Interceptos
>>> print(f"Intercepto: {model.intercept_}")

# Coeficientes
>>> for name, coef in zip(predictor_names, model.coef_):
... 	print(f"{name}: {coef}")


# Conocer los valores ajustados o también llamados pronósticos
>>> fitted_values = model.predict(df_train[predictor_names])

# Conocer los errores del pronóstico
>>> residuals = df_train[outcome_name] - fitted_values
```

## Regresión Lineal Múltiple con Statsmodels

```python
>>> import matplotlib.pyplot as plt
>>> import statsmodels.api as sm
>>> X = sm.add_constant(df_train[["column_predictor_1", "column_predictor_2", "column_predictor_3"]])
>>> model = sm.OLS(df_train["column_outcome"], X)
>>> results = model.fit()

# Imprimir el resumen del modelo
>>> print(results.summary())

# Realizar predicciones
>>> predictions = results.predict(X)
```