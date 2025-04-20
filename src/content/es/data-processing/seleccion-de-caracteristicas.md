---
slug: seleccion-de-caracteristicas
title: Selección de características
content: [
	{slug: "regularización-l1", title: "Regularización L1"},
	{slug: "regularización-l2", title: "Regularización L2"},
	{slug: "reducción-de-dimensionalidad", title: "Reducción de dimensionalidad"},
]
navigation: [
	{
		side: "left",
		title: "División de datos para entrenamiento y test",
		link: "division-de-datos-para-entrenamiento-y-test",
	},
	{
		side: "right",
		title: "Balanceo de datos",
		link: "balanceo-de-datos",
	}
]
---

La selección de características es una tarea fundamental para encontrar el mejor modelo para un problema de aprendizaje automático. Si observamos que el modelo se ajusta mejor en el conjunto de datos de entrenamiento que en el conjunto de datos de pruebas, es posible que estemos frente a un caso de _overfitting_.

_Overfitting_ o **sobreajuste** significa que el modelo ajusta los parámetros demasiado cerca con respecto a ciertas observaciones en el conjunto de datos de entrenamiento, pero no generaliza bien a otros conjuntos de datos, por ello, decimos que el modelo tiene **alta varianza**.

La razón por la que se produce el sobreajuste es que nuestro modelo es demasiado complejo para los datos de entrenamiento, por lo que es imporante reducir el error de generalización mediante **la introducción de una penalidad para la complejidad mediante la regularización**, **elección de un modelo más simple** o **la reducción la dimensionalidad de los datos**.

## Regularización L1

La **regularización L1** suele utilizarse en conjunto de datos de dimensiones mayores con muchas características que son irrelevantes, especialmente en casos donde se tiene más dimensiones irrelevantes que muestras porque fuerza algunos coeficientes a ser exactamente cero, eliminando las características irrelevantes, dado que agrega una penalización basada en la suma de los valores absolutos de los coeficientes.

Pueden utilizarse en modelos como regresión lineal Lasso, regresión logística, Elastic Net,SGDClassifier y SGDRegressor, estos dos últimos son modelos clasificadores/regresores lineales entrenados con el descenso del gradiente estocástico (SGD). 

```python
# En este caso, utilizaremos el modelo de regresión logística
>>> from sklearn.linear_model import LogisticRegression
>>> lr = LogisticRegression(penalty = "l1", C = 1) # 'C' representa la inversa del parámetro de regularización
>>> lr.fit(X_train, y_train)

>>> print(f"Training accuracy: {lr.score(X_train, y_train)}")
>>> print(f"Test accuracy: {lr.score(X_test, y_test)}")
```

## Regularización L2

A diferencia de la regularización L1, **la regularización L2** agrega una penalización basada en la suma de los cuadrados de los coeficientes, es decir, reduce todos los coeficientes pero no se vuelven exactamente cero, por lo que no elimina las características irrelevantes.

Entonces, sería útil cuando se desea analizar las dimensiones que tienen coeficientes pequeños—potencialmente menos importantes—que pueden ser eliminadas para reducir la dimensionalidad del modelo.

```python
>>> from sklearn.linear_model import LogisticRegression
>>> lr_l2 = LogisticRegression(penalty="l2", C=1)
>>> lr_l2.fit(X_train, y_train)

>>> print(f"Training accuracy: {lr_l2.score(X_train, y_train)}")
>>> print(f"Test accuracy: {lr_l2.score(X_test, y_test)}")
```

## Reducción de dimensionalidad

Es una de las alternativas para reducir la complejidad de aquellos modelos sin regularizar, mediante la selección de las características.

Existen dos categorías principales de técnicas de reducción de dimensionalidad: **selección de características** y **extracción de características**.

Mediante la selección de características, seleccionamos un subconjunto de las características originales, mientras que en la extracción de características, derivamos la información del conjunto de características para construir un nuevo subespacio de características.

## 1. SequentialFeatureSelector

Es un algoritmo de selección de características secuenciales perteneciente a la familia de algoritmos voraces de búsqueda que realizan localmente óptimas selecciones en cada etapa de un problema de búsqueda combinatorial y, por lo general, proporcionan una subóptima solución al problema.

El objetivo es reducir la dimensionalidad del subespacio de características inicial con un deterioro mínimo del rendimiento del clasificador para mejorar en eficiencia computacional.

```python
>>> from sklearn.linear_model import LogisticRegression
>>> from sklearn.feature_selection import SequentialFeatureSelector
>>> from sklearn.model_selection import train_test_split

>>> X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.3)
>>> model = LogisticRegression(max_iter = 1000)
>>> sfs = SequentialFeatureSelector(
...	estimator = model,
... n_features_to_select = 2
...	direction = "forward", # 'forward' añade las características una por una, 'backward' elimina las características una por una
...	scoring = "accuracy"
... cv = 5 )
>>> sfs.fit(X_train, y_train)

# Ver las características seleccionadas
>>> print("Caracteristicas seleccionadas:", sfs.get_support(indices = True))

# Transformar X para solo usar esas características
>>> X_train_selected = sfs.transform(X_train)
>>> X_test_selected = sfs.transform(X_test)

# Entrenar el modelo con las características seleccionadas
>>> model.fit(X_train_selected, y_train)

>>> print(f"Training accuracy: {model.score(X_train, y_train)}")
>>> print(f"Test accuracy: {model.score(X_test, y_test)}")
```

## 2. RandomForestClassifier

Mediante los **bosques aleatorios** podemos medir la importancia de las características, como la disminución media de impurezas calculadas a partir de todos los árboles de decisión de bosque, sin realizar suposiciones sobre si nuestro conjunto de datos es linealmente separable o no.

Los bosques aleatorios no requieren de características normalizadas o estandarizadas.

```python
>>> from sklearn.ensemble import RandomForestClassifier
>>> forest = RandomForestClassifier(n_estimators = 500, random_state = 1)
>>> forest.fit(X_train, y_train)
>>> importances = forest.feature_importances_
>>> indices = np.argsort(importances)[::-1]

# Graficar las características importantes
>>> import matplotlib.pyplot as plt
>>> plt.bar(
... range(X_train.shape[1]),
... importances[indices],
... align = "center"	
)
>>> plt.xticks(range(X_train.shape[1]), feat_labels, rotation = 90)
>>> plt.xlim([-1, X_train.shape[1]])
>>> plt.tight_layout()
>>> plt.show()
```

## Análisis de componentes principales (PCA)

El análisis de componentes principales (PCA) es una técnica de transformación lineal sin supervisión utilizada mayormente para la extracción de características y reducción de dimensionalidad.

PCA ayuda a encontrar las direcciones de varianza máxima en los datos de alta dimensión y las proyecta en un nuevo subespacio con dimensiones iguales o menores que el original. Como parte de esta transformación de los datos, el primer componente principal tendrá la mayor varianza posible, y todos los componentes principales derivados tendrán la mayor varianza dada la restricción de que estos componentes no están correlacionados entre sí, es decir, son ortogonales a los otros componentes principales.

Es importante mencionar que las direcciones PCA son muy sensibles al escalado de los datos, por lo que los datos deben estar estandarizados antes de realizar PCA.


```python
>>> from sklearn.decomposition import PCA
>>> from sklearn.preprocessing import StandardScaler

# Escalar los datos
>>> scaler = StandardScaler()
>>> X_scaled = scaler.fit_transform(X)

# Aplicar PCA para reducir a 2 componentes
>>> pca = PCA(n_components = 2) 
"""
Puedes utilizar los decimales entre 0 y 1 en 'n_components' para que el algoritmo seleccione el número de componentes necesarios para conservar el % de varianza
"""
>>> X_pca = pca.fit_transform(X_scaled)

# Ver la varianza explicada por cada componente
>>> print("Varianza explicada por cada componente:", pca.explained_variance_ratio_)

# Ver la varianza total explicada
>>> print("Varianza total explicada:", sum(pca.explained_variance_ratio_))
```