<template>
  <div id="MemberProfileContainer" class="pageContainer">
    <div class="pageContent">
      <section class="hero is-dark is-bold">
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-narrow">
                <figure class="media-left image is-128x128">
                  <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
              </div>
              <div class="column">
                <h1 class="title">Walter Molina</h1>
                <h2 class="subtitle is-5">
                  <i class="mdi mdi-gender-male"></i>&nbsp;34127118 30 años
                </h2>
                <div class="buttons">
                  <button class="button is-small is-dark is-inverted is-outlined is-rounded">
                    <i class="mdi mdi-whatsapp"></i>&nbsp;Chatear
                  </button>
                  <button class="button is-small is-dark is-inverted is-outlined is-rounded">
                    <i class="mdi mdi-phone"></i>&nbsp;Llamar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="section">
        <div class="container">
          <div class="box">
            <h5 class="subtitle is-4">Tipo de socio</h5>
            <div class="field">
              <label class="label">¿Es titular de la cuenta?</label>
              <b-switch
                v-model="isParent"
              >{{ isParent? "Sí": "No, pertenece a un grupo familiar." }}</b-switch>
            </div>
            <b-field name="fade">
              <b-field label="¿Quién es el titular de la cuenta?" v-if="!isParent">
                <b-autocomplete
                  :data="parentMembers"
                  placeholder="ej: Perez"
                  :custom-formatter="(item) => {return item.firstname+' '+item.lastname}"
                  :open-on-focus="true"
                  icon="account-star"
                  :loading="isFetching"
                  @typing="getAsyncData"
                  @select="option => selected = option"
                >
                  <template slot-scope="props">
                    <div class="media">
                      <div class="media-content">
                        {{ props.option.lastname }}, {{props.option.firstname}}
                        <br />
                        <small>
                          DNI
                          <b>{{ props.option.dni }}</b>
                        </small>
                      </div>
                    </div>
                  </template>
                  <template slot="empty">No hay titulares con ese apellido!</template>
                </b-autocomplete>
              </b-field>
            </b-field>
          </div>

          <div class="box">
            <h5 class="subtitle is-4">Datos personales</h5>
            <div class="field">
              <label class="label">Nombre</label>
              <div class="control">
                <input class="input" type="text" placeholder="Nombre(s)" />
              </div>
            </div>
            <div class="field">
              <label class="label">Apellido</label>
              <div class="control">
                <input class="input" type="text" placeholder="Apellido(s)" />
              </div>
            </div>
            <div class="field">
              <label class="label">DNI</label>
              <div class="control">
                <input class="input" type="number" placeholder="Número de DNI" />
              </div>
            </div>
            <b-field label="Género">
              <b-select placeholder="Seleccione género">
                <option value="1">AAAA</option>
                <option value="2">BBBB</option>
                <option value="3">CCCC</option>
                <option value="4">DDDD</option>
              </b-select>
            </b-field>
            <b-field label="Fecha de Nacimiento">
              <b-datepicker
                placeholder="Escriba o seleccione una fecha..."
                icon="calendar-today"
                :month-names="['Enero', 'Febrero','Marzo','Abril','Mayo','Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']"
                :day-names="['Do', 'Lu','Ma','Mi','Ju','Vi', 'Sa']"
                editable
              ></b-datepicker>
            </b-field>
            <div class="field">
              <label class="label">Lugar de Nacimiento</label>
              <div class="control">
                <input class="input" type="text" placeholder="Lugar" />
              </div>
            </div>
            <!--
          <b-field label="Estado Civil">
            <b-select placeholder="Seleccione estado civil">
              <option value="1">AAAA</option>
              <option value="2">BBBB</option>
              <option value="3">CCCC</option>
              <option value="4">DDDD</option>
            </b-select>
          </b-field>
            -->
          </div>
        </div>
        <!--<div class="divider"></div>-->
        <!--
        <div class="container">
          <h5 class="subtitle is-4">Domicilio</h5>
          <div class="field">
            <label class="label">Ciudad</label>
            <div class="control">
              <input class="input" type="text" placeholder="Ciudad" />
            </div>
          </div>
          <div class="field">
            <label class="label">Código Postal</label>
            <div class="control">
              <input class="input" type="text" placeholder="Código Postal" />
            </div>
          </div>
          <div class="field">
            <label class="label">Dirección</label>
            <div class="control">
              <input class="input" type="text" placeholder="ej: Avenida Siempre Viva 742" />
            </div>
          </div>
        </div>-->
        <!--<div class="divider"></div>-->
        <!--
        <div class="container">
          <h5 class="subtitle is-4">Datos de Contacto</h5>
          <div class="field">
            <label class="label">Teléfono</label>
            <div class="control">
              <input class="input" type="phone" placeholder="2657..." />
            </div>
          </div>
          <div class="field">
            <label class="label">Código Postal</label>
            <div class="control">
              <input class="input" type="text" placeholder="Código Postal" />
            </div>
          </div>
          <div class="field">
            <label class="label">Dirección</label>
            <div class="control">
              <input class="input" type="text" placeholder="ej: Avenida Siempre Viva 742" />
            </div>
          </div>
        </div>-->
      </div>
      <div class="section">
        <div class="container">
          <div class="divider"></div>
          <nav class="level">
            <!-- Left side -->
            <div class="level-left"></div>

            <!-- Right side -->
            <div class="level-right">
              <div class="buttons level-item">
                <button class="button">
                  <i class="mdi mdi-close"></i>&nbsp;Cancelar
                </button>
                <button class="button is-success">
                  <i class="mdi mdi-check"></i>&nbsp;Guardar
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash/debounce';

export default {
  data () {
    return {
      isParent: false,
      parentMembers: [],
      parentMember: null,
      // isEmpty: false,
      isFetching: false
    }
  },
  methods: {
    getAsyncData: debounce(function (name) {
      if (!name.length) {
        this.parentMembers = []
        return;
      }
      this.isFetching = true
      axios
        // .get(`https://api.themoviedb.org/3/search/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&query=${name}`)
        .get('http://localhost/sociosnewberyapi/public/member/all')
        .then(({ data }) => {
          this.parentMembers = data.result
          //data.results.forEach(item => this.parentMembers.push(item))
        })
        .catch(error => {
          this.parentMembers = []
          throw error
        })
        .finally(() => {
          this.isFetching = false
        })
    }, 500),

    getMembers () {
      let _t = this
      _t.isLoading = true
      axios
        .get('http://localhost/sociosnewberyapi/public/member/all')
        .then(function (response) {
          // handle success
          _t.parentMembers = response.data.result
          _t.isLoading = false
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
        .then(function () {
          // always executed
        })
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  mounted () {}
}
</script>

<style scoped>
@import "MemberProfile.min.css";
</style>
