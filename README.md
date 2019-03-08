
# Formation Front-End #3 - Redux 536

Une nouvelle startup tente de passer de son App React vers une app React Redux. Vous avez été engagé comme developpeur consultant pour faire la job.  Les fonctionnalité de base de l'application web appellé A-Ma-Zon et il vous faut implémenter les fonctionnalités suivante. 

Le CSS de la page a déjà été fait par un expert dans le domaine. Il ne faut pas vous en inquiéter, c'est de l'art abstrait.

1- Clear all cart items

Ajouter un bouton qui permet de retirer tous les items du cart.

2- Add a console middleware

Ajouter un middleware qui log dans la console toute les actions qui passent dans Redux.

3- Delete a cart item

Ajouter un bouton à la fin de chaque item dans le Cart qui permet de retirer l'item du Cart.

Exercice 4: 

Ajouter un middleware pour récupérer les données doivent à partir du fake api fournie.

Pour faire une requête au fake-api :

`const response = await fetch("http://localhost:5678/api/amazon/items", { method: "GET" });`

Exercice 5:

Ajouter un middleware pour mapper les actions corresponds à des requêtes HTTP en une action API_REQUEST.
Modifier le middleware de l'exercice 4 pour handler uniquement l'action API_REQUEST.

Exercice 6:

Un component doit afficher un indicateur de loading quand une requête HTTP est en cours.

Exercice 7:

Ajouter un middleware qui enrichie d'un "correlationId" toutes les actions.
