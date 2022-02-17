<template>
  <div style="padding: 40px;">
    <div
      justify="center"
      align="center"
      style="
        padding: 50px;

        font-size: 30px;
      "
    >
      Javascript funny moments
    </div>
    <v-card style="padding: 80px">
      <v-col class="mb-15">
        <v-row>
          <v-avatar color="indigo" size="36">
            <span class="white--text text-h5">1</span>
          </v-avatar>
          <h2>Exercice 1</h2>
        </v-row>
        <v-row>
          <h3>
            Écrire une fonction qui retourne l’alphabet en minuscule, dans
            l’ordre croissant, à partir de la lettre ’a’.
          </h3>
        </v-row>
        <v-row> Résultat: </v-row>
      </v-col>

      <v-col class="mb-15">
        <v-row>
          <v-avatar color="indigo" size="36">
            <span class="white--text text-h5">2</span>
          </v-avatar>
          <h2>Exercice 2</h2>
        </v-row>
        <v-row>
          <h3>
            Écrire une fonction qui retourne l’alphabet en minuscule sur une
            seule ligne, dans l’ordre décroissant, à partir de la lettre ’z’.
          </h3>
        </v-row>
        <v-row> Résultat: </v-row>
      </v-col>

      <v-col class="mb-15">
        <v-row>
          <v-avatar color="indigo" size="36">
            <span class="white--text text-h5">3</span>
          </v-avatar>
          <h2>Exercice 2</h2>
        </v-row>
        <v-row>
          <h3>
            Écrire une fonction qui retourne tous les chiffres, dans l’ordre
            croissant.
          </h3>
        </v-row>
        <v-row> Résultat: </v-row>
      </v-col>

      <v-col class="mb-15">
        <v-row>
          <v-avatar color="indigo" size="36">
            <span class="white--text text-h5">4</span>
          </v-avatar>
          <h2>Exercice 4</h2>
        </v-row>
        <v-row>
          <h3>
            Écrire une fonction qui retourne ’N’ ou ’P’ suivant le signe de
            l’entier passé en paramètre. Si n est négatif alors retourner ’N’.
            Si n est positif alors retourner ’P’.
          </h3>
        </v-row>
        <v-row> Résultat: </v-row>
      </v-col>

      <v-col class="mb-15">
        <v-row>
          <v-avatar color="indigo" size="36">
            <span class="white--text text-h5">5</span>
          </v-avatar>
          <h2>Exercice 5</h2>
        </v-row>
        <v-row>
          <h3>
            Écrire une fonction qui retourne, dans l’ordre croissant, toutes les
            différentes combinaisons de trois chiffres différents dans l’ordre
            croissant - oui, la répétition est volontaire.
          </h3>
        </v-row>
        <v-row>
          <p>
            Cela donne quelque chose comme ça :
            <br />
            012, 013, 014, 015, 016, 017, 018, 019, 023, ..., 789
            <br />
            987 n’est pas là car 789 est déjà présent 999 n’est pas là car ce
            nombre ne comporte pas exclusivement des chiffres différents
          </p>
        </v-row>
        <v-row> Résultat: </v-row>
      </v-col>

      <v-col class="mb-15">
        <v-row>
          <v-avatar color="indigo" size="36">
            <span class="white--text text-h5">6</span>
          </v-avatar>
          <h2>Exercice 6</h2>
        </v-row>
        <v-row>
          <h3>
            Écrire une fonction qui retourne toutes les différentes combinaisons
            de deux nombres entre 0 et 99, dans l’ordre croissant.
          </h3>
        </v-row>
        <v-row>
          <p>
            Cela donne quelque chose comme ça :
            <br />
            00 01, 00 02, 00 03, 00 04, 00 05, ..., 00 99, 01 02, ..., 97 99, 98
            99
          </p>
        </v-row>
        <v-row> Résultat: </v-row>
      </v-col>
    </v-card>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  toRefs,
} from "@vue/composition-api";

export default defineComponent({
  props: {},
  setup(props) {
    const data = reactive({});
    return {
      ...toRefs(data),
    };
  },
});
</script>
<style scoped lang="scss"></style>
