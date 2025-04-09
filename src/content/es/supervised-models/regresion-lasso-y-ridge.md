---
slug: regresion-lasso-y-ridge
title: Regresión Lasso y Ridge
content: [
	{slug: "regresion-lasso", title: "Regresión Lasso"},
	{slug: "regresion-ridge", title: "Regresión Ridge"},
	{slug: "elastic-net", title: "Elastic Net"},
]
navigation: [
		{
		side: "left",
		title: "Regresión Polinómica",
		link: "regresion-polinomica",
	},
	{
		side: "right",
		title: "Regresión Logistica",
		link: "regresion-logistica",
	},
]
---

## Regresión Lasso

**Lasso** proviene del inglés _Least Absolute Shrinkage and Selection Operator_. Es un método alternativo para generar modelos dispersos mediante la fuera de regularización provocando que determinados pesos de los coeficientes sean cero. Una de las limitantes del modelo es que selecciona como máximo _n_ variables si _m > n_.

```python
>>> from sklearn.linear_model import Lasso
>>> model = Lasso(alpha=0.1)
>>> model.fit(X_train, y_train)

# Imprimir los coeficientes
>>> print(f"Coeficientes: {model.coef_}")

# Imprimir los interceptos
>>> print(f"Intercepto: {model.intercept_}")
```

## Regresión Ridge

También conocido como **regresión contraída**, es un modelo L2 penalizado donde se añade la suma cuadrática de los pesos a la función de coste de mínimos cuadrados, teniendo en cuenta que al aumentar el valor del hiperparámetro **λ**, aumenta la fuerza de regularización y disminuye los pesos del modelo.

```python
>>> from sklearn.linear_model import Ridge
>>> model = Ridge(alpha=0.1)
>>> model.fit(X_train, y_train)

# Imprimir los coeficientes
>>> print(f"Coeficientes: {model.coef_}")

# Imprimir los interceptos
>>> print(f"Intercepto: {model.intercept_}")
```

## Elastic Net

Es un modelo que busca un equilibrio entre la regularización L1 del modelo Lasso para generar modelos dispersos y la regularización L2 del modelo Ridge para superar las limitaciones como el número de variables seleccionadas.

```python
>>> from sklearn.linear_model import ElasticNet
"""
Si l1_ratio = 1, el regresor ElasticNet sería igual a la regresión Lasso.
Si l1_ratio = 0, el regresor ElasticNet sería igual a la regresión Ridge.
"""
>>> model = ElasticNet(alpha=0.1, l1_ratio=0.5)
>>> model.fit(X_train, y_train)

# Imprimir los coeficientes
>>> print(f"Coeficientes: {model.coef_}")

# Imprimir los interceptos
>>> print(f"Intercepto: {model.intercept_}")
```