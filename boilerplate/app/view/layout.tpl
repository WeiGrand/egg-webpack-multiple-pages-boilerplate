<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>{{ page.title }}</title>
  {% block head %}
  {% endblock %}
  {{ helper.styles(page.name, assetsMap) | safe }}
</head>
<body>
{% block body %}
{% endblock %}

{{ helper.scripts(page.name, assetsMap) | safe }}
</body>
</html>
