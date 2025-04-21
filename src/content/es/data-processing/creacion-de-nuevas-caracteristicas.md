---
slug: creacion-de-nuevas-caracteristicas
title: Creación de nuevas características
content: [
	{slug: "transformación-logarítmica", title: "Transformación logarítmica"},
	{slug: "medias-móviles", title: "Medias móviles"},
	{slug: "cambios-porcentuales", title: "Cambios porcentuales"},
]
navigation: [
	{
		side: "left",
		title: "Codificación de variables categorías",
		link: "codificacion-de-variables-categoricas",
	},
	{
		side: "right",
		title: "División de datos para entrenamiento y test",
		link: "division-de-datos-para-entrenamiento-y-test",
	}
]
---

## Transformación logarítmica

Aplica el **logaritmo natural (base _e_)** a los valores de una columna.

Es una transformación no lineal que reduce la escala de los valores grandes y hace que las distribuciones asimétricas se vuelvan más normales.

```python
>>> import numpy as np
>>> df["column_name_log"] = np.log(df["column_name"]) # Se espera un array/serie de números positivos	
```

¿Cuándo usarlo?

1. Cuando una variable tiene una distribución muy sesgada a la derecha.

2. Para estabilizar la varianza y cumplir supuestos de modelos lineales.

3. Para crecimiento exponencial (como ingresos, población, etc.).

**¿Por qué el _log_ no aplica a las distribuciones sesgadas a la izquierda?**

Aplicar logaritmo en estos casos no ayuda porque no está definido para valores <= 0, el efecto de la transformación puede distorsionar los datos.

## Medias móviles

Calcula el promedio de los últimos _n valores_ para cada fila.

Es una técnica de suavizado para ver tendencias más claras en series temporales.

```python
"""
window: número de observaciones a considerar
min_periods: número mínimo de observaciones para calcular el promedio (por defecto es igual a window)
.mean(), .sum(), .std()... puedes aplicar cualquier agregación.
"""
>>> df["column_name_mov"] = df["column_name"].rolling(window = 3).mean()
```

¿Cuándo usarlo?

1. En análisis de series temporales para detectar tendencias o ciclos.

2. Para eliminar "ruido" y hacer que los datos sean más interpretables.

3. En finanzas, para indicadores técnicos como el promedio móvil de precios.

## Cambios porcentuales

Calcula el cambio porcentual entre una fila y la anterior. El resultado es el porcentaje de variación entre dos periodos consecutivos.

```python
"""
periods: número de periodos atrás con el que se calcula el cambio
"""
>>> df["column_name_pct"] = df["column_name"].pct_change(periods = 1)
```

¿Cuándo usarlo?

1. Para series temporales, especialmente en finanzas (retornos diarios, semanales).

2. Para medir crecimiento o caída relativa de cualquier indicador.