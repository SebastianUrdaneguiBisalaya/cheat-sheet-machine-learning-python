---
slug: balanceo-de-datos
title: Balanceo de datos
content: [
	{slug: "undersampling", title: "Undersampling"},
	{slug: "oversampling", title: "Oversampling"},
	{slug: "smote", title: "SMOTE"},
	{slug: "class-weights", title: "Class weights"},
	{slug: "tecnicas-combinadas", title: "Técnicas combinadas"},
	{slug: confusion-matrix, title: "confusion_matrix()"},
]
navigation: [
	{
		side: "left",
		title: "Selección de características",
		link: "seleccion-de-caracteristicas",
	},
	{
		side: "right",
		title: "Carga de datos",
		link: "carga-de-datos",
	}
]
---

En tareas de clasificación, especialmente en problemas con clases minoritarias (como fraude, enfermedades raras, etc.), tener clases desbalanceadas puede hacer que el modelo aprenda a ignorar la clase minoritaria.

## Undersampling

Elimina las muestras de la clase mayoritaria. Es útil cuando hay mucho datos redundantes en la clase mayor. Sin embargo, puede eliminar información valiosa.

```python
>>> from imblearn.under_sampling import RandomUnderSampler
>>> rus = RandomUnderSampler()
>>> X_res, y_res = rus.fit_resample(X, y)
```

## Oversampling

Duplica instancias de la clase minoritaria.

```python
>>> from imblearn.over_sampling import RandomOverSampler
>>> ros = RandomOverSampler()
>>> X_res, y_res = ros.fit_resample(X, y)
```

## SMOTE

**Synthetic Minority Over-sampling Technique** (SMOTE) genera nuevos puntos interpolando entre los vecinos de la clase minoritaria. Es muy útil para los datos numéricos y continuos, y puede combinarse con el método _undersampling_ para generar un mayor balance.

```python
>>> from imblearn.over_sampling import SMOTE
>>> smote = SMOTE()
>>> X_res, y_res = smote.fit_resample(X, y)
```

## Class weights

Aumenta la penalización por clasificar mal la clase minoritaria.

Este método se encuentra disponible en los modelos como _LogisticRegression_, _RandomForest_, _SVC_, etc.

```python
>>> from sklearn.linear_model import LogisticRegression
>>> clf = LogisticRegression(class_weight='balanced')
>>> clf.fit(X, y)
```

## Técnicas combinadas

Es la combinación del método _SMOTE_ con la limpieza de ejemplos ruidosos (Tomek Links). Útil cuando se desea mejorar la generalización del model.

```python
>>> from imblearn.combine import SMOTETomek
>>> smote_tomek = SMOTETomek()
>>> X_res, y_res = smote_tomek.fit_resample(X, y)
```

## confusion_matrix()

La **matriz de confusión** es una herramienta fundamental para evaluar el desempeño de un modelo de clasificación, proporcionando una visualización detallada de las predicciones del modelo en comparación con las verdaderas clases.

Esta matriz permite desglosar las predicciones en diferentes categorías, facilitando el análisis de las **verdaderas positivas (TP)**—casos en los que la clase positiva es correctamente clasificada—, **verdaderas negativas (TN)**—casos en los que la clase negativa es correctamente clasificada—, **falsas positivas (FP)**—casos en los que el modelo predice la clase positiva incorrectamente—y **falsas negativas (FN)**—casos en los que el modelo predice la clase negativa incorrectamente—que son esenciales para calcular métricas de desempeño como la precisión, el recall, la F1-score y la exactitud.


```python
>>> from sklearn.metrics import classification_report, confusion_matrix
>>> print(confusion_matrix(y_test, y_pred))
>>> print(classification_report(y_test, y_pred))
```

**Precisión** 

Mide la proporción de instancias predichas como positivas que realmente son positivas.

Es una métrica importante en escenarios donde los falsos positivos son costosos o no deseables. Por ejemplo, en una prueba médica para detectar una enfermedad rara, la precisión asegura que solo se diagnostiquen como positivos a los pacientes que realmente tienen la enfermedad, evitando diagnósticos erróneos.

• _Alta precisión_ significa que los positivos predichos son generalmente correctos.

• _Baja precisión_ significa que hay muchos falsos positivos.

```python
precision = TP / (TP + FP)
```

**Recall** 

Mide la proporción de instancias positivas que fueron correctamente identificadas por el modelo.

Es crucial en situaciones donde los falsos negativos son peligrosos o costosos. Por ejemplo, en la detección de fraude bancario, es esencial que el modelo detecte todos los fraudes posibles, incluso si eso significa generar algunos falsos positivos.

• _Alto recall_ expresa que el modelo está capturando casi todos los casos positivos reales.

• _Bajo recall_ expresa que el modelo está perdiendo muchos casos positivos, es decir, muchos falsos negativos.

```python
recall = TP / (TP + FN)
```

**F1-score** 

Es la media armónica entre la precisión y el recall.

Es apropiado su aplicación en conjuntos de datos con clases desbalanceadas.

• _F1-score alto_ significa que tanto la precisión como el recall son buenos.

• _F1-score bajo_ significa que una de las dos métricas (precisión o recall) está bajo, lo que indica un rendimiento pobre en algunas de las dos dimensiones.

```python
f1_score = 2 * (Precisión * Recall) / (Precisión + Recall)
```

**Exactitud** 

Mide la proporción de predicciones correctas (tanto positivas como negativas) sobre el total de instancias.

Esta métrica es la más intuitiva, pero puede ser engañosa en casos de clases desbalanceadas.

• _Alta exactitud_ significa que el modelo está acertando la mayoría de las predicciones (sin importar si son positivas o negativas).

• _Baja exactitud_ puede indicar que el modelo no está capturando bien la clase minoritaria o tiene un sesgo hacia la clase mayoritaria.

```python
exactitud = (TP + TN) / (TP + TN + FP + FN)
```