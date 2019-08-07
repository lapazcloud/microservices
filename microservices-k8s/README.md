# Deployment steps

```sh

# Create all secrets
kubectl create secret generic api-config \
--from-iteral=POSTGRES_HOST=SET_A_VALUE_HERE \
--from-literal=POSTGRES_DB=SET_A_VALUE_HERE \
--from-literal=POSTGRES_USER=SET_A_VALUE_HERE \
--from-literal=POSTGRES_PASSWORD=SET_A_VALUE_HERE \
--from-literal=POSTGRES_PORT=SET_A_VALUE_HERE \
--from-literal=SECRET_KEY=SET_A_VALUE_HERE \
--from-literal=DJANGO_DEBUG=False

# Deploy the API
kubectl create -f api.yaml
# List all pods
kubectl get pods
# Enter a pod running API
kubectl exec -it api-DEPLOYMENT-POD sh

# Inside the pod, makemigrations and migrate
python manage.py makemigrations
python manage.py migrate

# Create a superuser
python manage.py createsuperuser
# (follow the prompts to complete this step)

# Deploy Traefik
kubectl apply -f https://raw.githubusercontent.com/containous/traefik/v1.7/examples/k8s/traefik-rbac.yaml
kubectl apply -f https://raw.githubusercontent.com/containous/traefik/v1.7/examples/k8s/traefik-ds.yaml

# Deploy the ingresses
kubectl create -f ingresses.yaml

```
