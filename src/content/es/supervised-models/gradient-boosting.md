---
slug: gradient-boosting
title: Gradient Boosting
content: [
	{slug: "gradientboostingclassifier", title: "GradientBoostingClassifier"},
	{slug: "gradientboostingregressor", title: "GradientBoostingRegressor"},
]
navigation: [
	{
		side: "left",
		title: "Random Forest",
		link: "random-forest"
	},
	{
		side: "right",
		title: "Regresión Lineal",
		link: "regresion-lineal"
	}
]
---

## GradientBoostingClassifier

Es un modelo de ensamble que construye árboles de decisión de forma secuencial, donde cada árbol corrige los errores del anterior. El objetivo es minimizar una función de pérdida mediante el descenso de gradiente.

```python
>>> from sklearn.ensemble import GradientBoostingClassifier
>>> model = GradientBoostingClassifier(n_estimators=100, learning_rate=0.1, max_depth=3, min_samples_split=2, min_samples_leaf=1, subsample=1.0, random_state=None)
>>> model.fit(X_train, y_train)

# Predecir valores
>>> y_pred = model.predict(X_test)
```

n_estimators

Número de etapas de boosting a realizar. Más etapas pueden mejorar el rendimiento, pero también aumentan el tiempo de entrenamiento y el riesgo de sobreajuste.

learning_rate

Contribución de cada árbol a la predicción final. Un valor bajo requiere más árboles, pero puede mejorar la generalización.

max_depth

Profundidad máxima de los árboles individuales. Controla la complejidad del modelo.

min_samples_split

Número mínimo de muestras requeridas para dividir un nodo interno.

min_samples_leaf

Número mínimo de muestras requeridas 1  en un nodo hoja.   

subsample

Fracción de muestras a utilizar para ajustar los árboles individuales. Un valor menor a 1.0 introduce estocasticidad y reduce la varianza.

random_state

Semilla para la generación de números aleatorios, para reproducibilidad.


## GradientBoostingRegressor

Similar al clasificador, pero se utiliza para problemas de regresión. La predicción final es la suma ponderada de las predicciones de los árboles individuales.

```python
>>> from sklearn.ensemble import GradientBoostingRegressor
>>> model = GradientBoostingRegressor(n_estimators=100, learning_rate=0.1, max_depth=3, min_samples_split=2, min_samples_leaf=1, subsample=1.0, random_state=None)
>>> model.fit(X_train, y_train)

# Predecir valores
>>> y_pred = model.predict(X_test)
```