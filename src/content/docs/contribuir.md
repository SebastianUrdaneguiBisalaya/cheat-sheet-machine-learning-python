---
slug: contribuir
title: Contribuir
---

El primer paso en cualquier proyecto de Machine Learning es la carga y exploración de los datos. La calidad y
la comprensión de los datos impactan directamente en el rendimiento de los modelos. A continuación, se
presentan los métodos esenciales para manejar datos en Python, utilizando la biblioteca pandas, una de las
más populares para el análisis de datos.


## Carga de datos desde un archivo CSV		

```python
>>> import pandas as pd
>>> from pandas import DataFrame # Definir el tipo de dataframe

>>> df: DataFrame = pd.read_csv("data.csv")

>>> print(df.head())
```

## Carga de datos desde un archivo Excel

```python
>>> import pandas as pd
>>> from pandas import DataFrame

>>> df: DataFrame = pd.read_excel("data.xlsx", 
...								sheet_name="Sheet1")

>>> print(df.head())
```

## Carga de datos desde un archivo JSON

```python
>>> import pandas as pd
>>> from pandas import DataFrame

>>> df: DataFrame = pd.read_json("data.json")

>>> print(df.to_string())
```

## Carga de datos desde un archivo SQL

```python
>>> import pandas as pd
>>> from pandas import DataFrame

>>> df: DataFrame = pd.read_sql_query("SELECT * FROM data", 
...									con=engine)

>>> print(df.to_string())
```

## Carga de datos desde un archivo XML

```python
>>> import pandas as pd
>>> from pandas import DataFrame

>>> df: DataFrame = pd.read_xml("data.xml")

>>> print(df.to_string())
```