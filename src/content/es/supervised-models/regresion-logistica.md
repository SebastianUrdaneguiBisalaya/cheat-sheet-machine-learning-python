---
slug: regresion-logistica
title: Regresión Logistica
content: [
	{slug: "logistic-regression", title: "Logistic Regression"},
]
navigation: [
	{
		side: "left",
		title: "Regresión Lasso y Ridge",
		link: "regresion-lasso-y-ridge"
	},
	{
		side: "right",
		title: "K-Nearest Neighbors",
		link: "knearest-neighbors"
	}
]
---

## Logistic Regression	

La **regresión logística** es equivalente a la regresión lineal múltiple con la excepción de que el resultado es un valor binario, es decir, 0 o 1, dependiendo de si la probabilidad de que la variable de salida tome el valor 1 es mayor que la probabilidad de que tome el valor 0.

```python
>>> from sklearn.linear_model.LogisticRegression
>>> model = LogisticRegression(penalty = 'l2', C = 1e42, solver = "liblinear")
>>> model.fit(X_train, y_train)

# Imprimir los coeficientes
>>> print(f"Coeficientes: {model.coef_}")

# Imprimir los interceptos
>>> print(f"Intercepto: {model.intercept_}")
```

**penalty**

Por defecto, el modelo usa la penalización L2, pero se puede utilizar la penalización L1, Elastic Net o no penalización.

**C**

Es la inversa de la fuerza de regularización, debe ser un valor positivo decimal. Un valor pequeño especifica una mayor fuerza de regularización.

**solver**

Es el algoritmo que utiliza el modelo para optimizar el problema. Por defecto, el modelo utiliza el algoritmo _lbfgs_.

Puedes utilziar diversos algoritmos como _liblinear_, _newton-cg_, _newton-cholesky_, _sag_ o _saga_.

**"liblinear"** es una buena elección para pequeños conjuntos de datos, mientras que **"sag"** y **"saga"** son más rápidos para grandes conjuntos de datos, pero debes asegurarte en los estos dos últimos modelos que las características deben escalarse para la rápida convergencia de los algoritmos.

**newton-cholesky** es adeacuada para aquellos conjuntos de datos donde la cantidad de ejemplos es mayor que el producto de las dimensiones y el número de clases: n_samples >> n_features * n_classes.


> [!WARNING]
> La elección del algoritmo depende del tipo de penalización y el soporte multiclase multinomial.

<div class="table-wrapper scrollbar">

| solver | penalty | multinomial multiclass |
|----------|----------|----------|
| lbfgs    | l2, None   | Sí   |
| liblinear    | l1, l2   | No   |
| newton-cg    | l2, None   | Sí   |
| newton-cholesky    | l2, None   | No   |
| sag    | l2, None   | Sí   |
| saga    | elasticnet, l1, l2, None   | Sí   |

</div>
