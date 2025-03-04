---
slug: contribuir
title: Contribuir
---

```python
def register_user(name, age):
	if name == "" or age < 0: return "The user cannot register."
	if age > 100: return "The user cannot register."
	return f"Welcome {name}, you are {age} years old."
```