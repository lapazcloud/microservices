FROM python:3-alpine as dev
WORKDIR /api
COPY . .
RUN apk add curl postgresql-libs gcc musl-dev postgresql-dev && \
pip install -r requirements.txt --no-cache-dir && \
apk --purge del gcc musl-dev postgresql-dev
EXPOSE 5000
CMD ["python", "manage.py", "runserver", "0.0.0.0:5000"]

FROM dev
RUN pip install gunicorn && SECRET_KEY=12345678 python manage.py collectstatic
EXPOSE 8000
ENV DJANGO_DEBUG False
HEALTHCHECK CMD curl --silent --fail http://localhost:8000/api/ || exit 1
CMD ["gunicorn", "api.wsgi", "-b=0.0.0.0", "--log-file=-"]
