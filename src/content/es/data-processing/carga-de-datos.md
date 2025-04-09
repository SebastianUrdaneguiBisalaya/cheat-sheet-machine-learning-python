---
slug: carga-de-datos
title: Carga de datos
content: [
	{slug: "carga-de-datos-desde-un-archivo-csv", title: "Carga de datos desde un archivo CSV"},
	{slug: "carga-de-datos-desde-un-archivo-excel", title: "Carga de datos desde un archivo Excel"},
	{slug: "carga-de-datos-desde-un-archivo-json", title: "Carga de datos desde un archivo JSON"},
	{slug: "carga-de-datos-desde-un-archivo-txt", title: "Carga de datos desde un archivo TXT"},
	{slug: "carga-de-datos-desde-un-archivo-sql", title: "Carga de datos desde un archivo SQL"},
]
navigation: [
	{
		side: "left",
		title: "Balanceo de datos",
		link: "balanceo-de-datos",
	},
	{
		side: "right",
		title: "Exploración de datos",
		link: "/data-processing/exploracion-de-datos",
	},
]
---

El primer paso en cualquier proyecto de Machine Learning es la carga de los datos. A continuación, se
presentan los métodos esenciales para manejar datos en Python, utilizando la biblioteca **pandas**, una de las
más populares para el análisis de datos.

<br>

```python
>>> import pandas as pd
>>> from pandas import DataFrame # Definir el tipo de DataFrame
```

## Carga de datos desde un archivo CSV		

```python
>>> df: DataFrame = pd.read_csv("data.csv", sep=";") # Separador por defecto es ","

>>> print(df.head())
```

## Carga de datos desde un archivo Excel

```python
>>> df: DataFrame = pd.read_excel("data.xlsx", 
...								sheet_name="Sheet1") # Nombre de la hoja de cálculo

>>> print(df.head())
```

## Carga de datos desde un archivo JSON

```python
>>> df: DataFrame = pd.read_json("data.json")

>>> print(df.to_string())
```

## Carga de datos desde un archivo TXT

```python
>>> df: DataFrame = pd.read_csv("data.txt")

>>> print(df.head())
```

## Carga de datos desde un archivo SQL

```python
>>> from sqlalchemy import create_engine # Aplica para conectarse a PostgreSQL, MySQL/MariaDB y SQL Server 

>>> engine = create_engine("mssql+pyodbc://your_user:your_password@your_server/your_database_name?driver=ODBC+Driver+17+for+SQL+Server") # Conexión a SQL Server
>>> df: DataFrame = pd.read_sql_query("SELECT * FROM data", 
...									con=engine)

>>> print(df.to_string())
```