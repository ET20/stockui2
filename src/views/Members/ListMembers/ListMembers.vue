<template>
  <div id="ListMembersContainer" class="pageContainer">
    <div class="pageContentAbsolute">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <i class="mdi mdi-plus"></i>&nbsp;
                  <strong>Agregar socio</strong>
                </a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <b-input placeholder="Buscar..." type="search" icon="magnify"></b-input>
            </div>
          </div>
        </div>
      </nav>

      <div id="table1" class="dataTableContainer">
        <b-table
          ref="familiesTable"
          :data="members"
          :loading="isLoading"
          detailed
          custom-detail-row
          :show-detail-icon="false"
        >
          <template slot-scope="props">
            <b-table-column field="idmember" label="ID" numeric>
              <a @click="toggle(props.row)">{{ props.row.idmember }}</a>
            </b-table-column>

            <b-table-column
              field="membernumber"
              label="Número"
              sortable
            >{{ props.row.membernumber }}</b-table-column>

            <b-table-column field="lastname" label="Apellido">{{ props.row.lastname }}</b-table-column>

            <b-table-column field="firstname" label="Nombre">{{ props.row.firstname }}</b-table-column>

            <b-table-column field="birthdate" label="Fecha de Nacimiento" centered>
              <span class="tag is-success">{{ new Date(props.row.birthdate).toLocaleDateString() }}</span>
            </b-table-column>

            <b-table-column field="gender" label="Gender">
              <i :class="['mdi', 'mdi-'+props.row.gender.gendericon]"></i>
              {{ props.row.gender.gendername }}
            </b-table-column>
          </template>

          <template slot="detail" slot-scope="props">
            <tr class="family">
              <table>
                <tbody>
                  <tr v-for="item in props.row.family">
                    <td>{{ item.idmember }}</td>
                    <td>{{ item.lastname }}</td>
                    <td>{{ item.firstname }}</td>
                    <td>
                      <span
                        class="tag is-success"
                      >{{ new Date(item.birthdate).toLocaleDateString() }}</span>
                    </td>

                    <td>{{ item.gender}}</td>
                    <td>{{ item.relation }}</td>
                  </tr>
                </tbody>
              </table>
            </tr>
          </template>

          <template slot="empty">
            <section class="section">
              <div class="content has-text-grey has-text-centered">
                <p>
                  <b-icon icon="emoticon-sad" size="is-large"></b-icon>
                </p>
                <p>Nothing here.</p>
              </div>
            </section>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      members: [],
      isEmpty: false,
      isLoading: false,
      showDetailIcon: true
    }
  },
  methods: {
    getMembers () {
      let _t = this
      _t.isLoading = true
      this.$http
        .get('http://localhost/sociosnewberyapi2/public/member/families')
        .then(function (response) {
          // handle success
          _t.members = response.data.result
          _t.isLoading = false
          if (response.data.result.length > 0) {
            _t.isEmpty = false
          } else {
            _t.isEmpty = true
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
        .then(function () {
          // always executed
        })
    },
    toggle (row) {
      this.$refs.familiesTable.toggleDetails(row)
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
    this.getMembers()
  },
  mounted () {}
}
</script>

<style scoped>
@import "ListMembers.min.css";
</style>
