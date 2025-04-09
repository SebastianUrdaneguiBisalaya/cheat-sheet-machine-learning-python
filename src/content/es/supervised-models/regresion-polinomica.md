---
slug: regresion-polinomica
title: Regresión Polinomial
content: [
	{slug: "PolynomialFeatures", title: "PolynomialFeatures"},
]
navigation: [
	{
		side: left,
		title: "Regresión Linear",
		link: "regresion-linear"
	},
	{
		side: right,
		title: "Regresión Lasso y Ridge",
		link: "regresion-lasso-y-ridge"
	}
]
---

El objetivo de la regresión polinomial es encontrar una relación no lineal entre las variables de entrada y la variable de salida.

## PolynomialFeatures

```python
>>> from sklearn.preprocessing import PolynomialFeatures
>>> poly = PolynomialFeatures(degree=2, interaction_only=False,
... 	include_bias=True, order='C')
```

**degree**

Genera todas las combinaciones de las características hasta el grado especificado.

```lua
# Grado 2
>>> [[1, x1, x2, x^2, x1*x2, x2^2]]
```

**interaction_only**

Indica si se deben generar solo términos de interacción entre variables (sin potencias individuales).

Si interaction_only = _False_ (por defecto) genera todas las combinaciones hasta el grado indicado, incluyendo x1^2, x2^2, etc., caso contrario solo genera productos entre distintas variables, como x1*x2.

**include_bias**

Agrega una columna de unos (bias) al comienzo de la matriz transformada, útil para modelos como regresión lineal que incluyen un término independiente.

**order**

Define el orden las columnas generadas en la salida.

Por defecto, el orden es 'C', lo que significa que las columnas siguen el orden lexicográfico (como en C: x1, x2, x1^2, x1*x2, x2^2).

