---
slug: arboles-de-decision
title: Árboles de decisión
content: [
	{slug: "decision-tree-classifier", title: "DecisionTreeClassifier"},
	{slug: "decision-tree-regressor", title: "DecisionTreeRegressor"},
]
navigation: [
	{
		side: left,
		title: "K-Nearest Neighbors",
		link: "k-nearest-neighbors"
	},
	{
		side: right,
		title: "Random Forest",	
		link: "random-forest"
	},
]
---

## DecisionTreeClassifier

El **árbol de decisión para clasificación** es un modelo que divide el conjunto de datos en forma de árbol binario, tomando decisiones secuenciales según los valores de las características. En cada nodo, el modelo escoge la característica y el umbral que mejor separan las clases según un criterio de impureza.

```python
>>> from sklearn.tree import DecisionTreeClassifier
>>> model = DecisionTreeClassifier(criterion='gini', max_depth=None, min_samples_split=2, min_samples_leaf=1, max_features=None, random_state=None)
>>> model.fit(X_train, y_train)

# Predecir valores
>>> y_pred = model.predict(X_test)
```

**criterion**

Función utilizada para medir la calidad de una división. 

Las opciones disponibles en el clasificador son **gini**—utiliza el índice de Gini—, **entropy** y **log_loss**—ambos usan la ganancia de información de Shannon.


**max_depth**

Profundidad máxima del árbol. Si no se especifica (None), los nodos se expanden hasta que todas las hojas sean puras o tengan menos de min_samples_split muestras.

**min_samples_split**

Número mínimo de muestras necesarias para dividir un nodo interno. Un valor más alto puede evitar sobreajuste.

**min_samples_leaf**

Número mínimo de muestras requeridas para estar en un nodo hoja. Ayuda a suavizar el modelo.

**max_features**

Número máximo de características a considerar al buscar la mejor división. Si se deja en None, se consideran todas. Nota: 'auto' no es una opción válida en DecisionTreeClassifier y lanzará un error. Para árboles de decisión simples, no es necesario ajustar este parámetro, pero sí es importante en bosques aleatorios.

**random_state**

Semilla para la generación de números aleatorios. Se recomienda fijarlo para reproducibilidad.

## DecisionTreeRegressor

El **árbol de decisión para regresión** funciona de manera similar al clasificador, pero en lugar de predecir una clase, predice un valor numérico continuo. El modelo divide el espacio de características en regiones, y cada hoja de árbol representa un valor promedio de las muestras que caen en esa región.

```python
>>> from sklearn.tree import DecisionTreeRegressor
>>> model = DecisionTreeRegressor(criterion='squared_error', max_depth=None, min_samples_split=2, min_samples_leaf=1, max_features=None, random_state=None)
>>> model.fit(X_train, y_train)

# Predecir valores
>>> y_pred = model.predict(X_test)
```

**criterion**

Función que mide la calidad de una división. 

En regresión, las opciones son **squared_error**—minimiza el error cuadrático medio—, **absolute_error**—minimiza el error absoluto—, **poisson**—para los datos de conteo—y **friedman_mse**—optimizado para GradientBoosting.