---
slug: division-de-datos-para-entrenamiento-y-test
title: División de datos para entrenamiento y test
content: [
	{slug: "train-test-split", title: "train_test_split()"},
]
navigation: [
	{
		side: "left",
		title: "Selección de características",
		link: "seleccion-de-caracteristicas",
	},
	{
		side: "right",
		title: "Balanceo de datos",
		link: "balanceo-de-datos",
	},
]
---

## train_test_split()

Es de vital importancia dividir nuestro conjunto de datos en subconjuntos de entrenamiento y prueba para poder evaluar el rendimiento de nuestros modelos.

Debemos tener en cuenta que al hacer esta partición, estamos reteniendo información valiosa de la cual podría beneficiarse nuestro algoritmo de aprendizaje automático. Por tanto, no nos interesa tener demasiados datos en el subconjunto de pruebas. Sin embargo, cuanto menor es el subconjunto de pruebas, menos precisa es la estimación del error de generalización. Por ello, la división del conjunto implica encontrar el equilibrio de esta compensación.

En la práctica, las particiones que más suelen usarse son **60:40**, **70:30** o **80:20**, según el tamaño del conjunto de datos inicial. Sin embargo, para conjuntos de datos grandes, una división de **90:10** o **99:1** en subconjuntos de entrenamiento y prueba son comunes.

```python
"""
train_size: Porcentaje de datos que se usarán para entrenar.
test_size: Porcentaje de datos que se usarán para la prueba.
random_state: Establece el número de semilla para la generación de números aleatorios.
stratify: Garantiza que tanto el subconjunto de prueba y de entrenamiento tengan las mismas proporciones de clases.
shuffle: Permite que los datos se muestren en un orden aleatorio.
"""
>>> from sklearn.model_selection import train_test_split
>>> X_train, X_test, y_train, y_test = train_test_split(
...		X, y, train_size = 0.8, test_size = 0.2,
...		random_state = 42, shuffle = True, stratify = y)
```