---
slug: knearest-neighbors
title: K-Nearest Neighbors
content: [
	{slug: "k-neighbors-classifier", title: "KNeighborsClassifier"},
	{slug: "k-neighbors-regressor", title: "KNeighborsRegressor"},
]
navigation: [
	{
		side: "left",
		title: "Regresión Logistica",
		link: "regresion-logistica"
	},
	{
		side: "right",
		title: "Árboles de decisión",
		link: "arboles-de-decision"
	}
]
---

## KNeighborsClassifier

El clasificador de vecinos más cercanos (**K-Nearest Neighbors**) es un modelo basado en las instancias que asigna una clase a un nuevo punto de datos en función de las clases de sus vecinos más cercanos.

A diferencia de los modelos lineales, este no aprende parámetros durante el entrenamiento, sino que almacena los datos de entrenamiento y utiliza una métrica de distancia para clasificar nuevos puntos.

```python
>>> from sklearn.neighbors import KNeighborsClassifier
>>> model = KNeighborsClassifier(n_neighbors=5, weights='uniform', algorithm='auto', p=2, metric='minkowski', metric_params=None, n_jobs=None)
>>> model.fit(X_train, y_train)
>>> print(model.predict(X_train[:1]))
>>> print(model.predict_proba(X_train[:1]))
```

**n_neighbors**

Indica el número de vecinos a considerar al clasificar un punto. El valor predeterminado es 5. Un número bajo puede generar un modelo más flexible pero sensible al ruido.

**weights**

Determina cómo se ponderan los vecinos: _uniform_—todos lo vecinos contribuyen por igual—o _distance_—los vecinos más cercanos tiene mayor peso.

**algorithm**

Indica el algoritmo utilizado para computar los vecinos. Por defecto es _auto_ donde elige el algoritmo más apropiado basado en los valores que se pasaron por el método _fit_. Los algoritmos que soporta son *"ball_tree"*, *"kd_tree"* y *"brute"*.

**leaf_size**

Cuando se usa un algoritmo como *ball_tree* o *kd_tree* para buscar los vecinos (en lugar de *brute*), Scikit-Learn construye una estructura de árbol para acelerar la búsqueda. **leaf_size** define el número mínimo de puntos en una hoja del árbol.

**p**

Indica el parámetro de fuerza de la métrica de _Minkowski_. Por defecto es 2, cuando _p=1_, esto es equivalente a la distancia de Manhattan y la distancia Euclidiana cuando _p=2_.

**metric**

Determina la métrica para computar la distancia entre los puntos. Por defecto usa la métrica de _Minkowski_ con parámetro _p=2_.


## [KNeighborsRegressor](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsRegressor.html)

El regresor de vecinos más cercanos (**K-Nearest Neighbors Regressor**) funciona de manera similar al clasificador, pero devuelve un valor numérico como promedio (ponderado o no) de los valores de los vecinos más cercanos.

```python
>>> from sklearn.neighbors import KNeighborsRegressor
>>> model = KNeighborsRegressor(n_neighbors=5, weights='uniform', algorithm='auto', leaf_size=30, p=2, metric='minkowski', metric_params=None, n_jobs=None)
>>> model.fit(X_train, y_train)
>>> print(model.predict(X_train[:1]))
```