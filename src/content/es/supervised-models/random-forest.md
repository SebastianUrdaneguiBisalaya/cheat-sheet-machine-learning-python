---
slug: random-forest
title: Random Forest
content: [
	{slug: "random-forest-classifier", title: "Random Forest Classifier"},
	{slug: "random-forest-regressor", title: "Random Forest Regressor"},
]
navigation: [
	{
		side: "left",
		title: "Árboles de decisión",
		link: "arboles-de-decision"
	},
	{
		side: "right",
		title: "Gradient Boosting",
		link: "gradient-boosting"
	}
]
---

> [!NOTE]
> Los parámetros especificados en los modelos de RandomForest son similares a los parámetros de los modelos de Árboles de Decisión, por lo que se sugiere revisar la documentación de ambos para obtener más información.


## Random Forest Classifier

El **bosque aleatorio para clasificación** es un modelo de ensamble que utiliza múltiples árboles de decisión para realizar predicciones de clasificación. Cada árbol se entrena en una muestra aleatoria con reemplazo del conjunto de datos, y la predicción final se basa en la votación mayoritaria de los árboles individuales.

```python
>>> from sklearn.ensemble import RandomForestClassifier
>>> model = RandomForestClassifier(n_estimators=100, criterion='gini', max_depth=None, min_samples_split=2, min_samples_leaf=1, max_features='sqrt', random_state=None)
>>> model.fit(X_train, y_train)

# Predecir valores
>>> y_pred = model.predict(X_test)
```


## Random Forest Regressor

El **bosque aleatorio para regresión** es similar al clasificador, pero se utiliza para problemas de regresión. La predicción final es el promedio de las predicciones de los árboles individuales.

```python
>>> from sklearn.ensemble import RandomForestRegressor
>>> model = RandomForestRegressor(n_estimators=100, criterion='squared_error', max_depth=None, min_samples_split=2, min_samples_leaf=1, max_features='sqrt', random_state=None)
>>> model.fit(X_train, y_train)

# Predecir valores
>>> y_pred = model.predict(X_test)
```

