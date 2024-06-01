from PIL import Image
import os
import avifio

def redimensionner_image(chemin_image, taille=(300, 300)):
    try:
        with avifio.AVIF(chemin_image) as avif:
            img = Image.frombytes("RGB", avif.size, avif.read())
            img.thumbnail(taille)
            return img
    except IOError:
        print("Impossible d'ouvrir ou de redimensionner l'image à l'emplacement:", chemin_image)
        return None

def redimensionner_images_dossier(origine, destination, taille=(300, 300)):
    if not os.path.exists(destination):
        os.makedirs(destination)

    for fichier in os.listdir(origine):
        if fichier.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff', '.webp', '.avif')):
            chemin_origine = os.path.join(origine, fichier)
            img_redimensionnee = redimensionner_image(chemin_origine, taille)
            if img_redimensionnee:
                nom_fichier, _ = os.path.splitext(fichier)
                chemin_destination = os.path.join(destination, nom_fichier + ".png")
                img_redimensionnee.save(chemin_destination)
                print(f"Image redimensionnée et sauvegardée à {chemin_destination}")

# Paramètres
dossier_origine = "img_brutes"
dossier_destination = "img_traitee"
taille_par_defaut = (50, 50)

# Appel de la fonction
redimensionner_images_dossier(dossier_origine, dossier_destination, taille_par_defaut)
