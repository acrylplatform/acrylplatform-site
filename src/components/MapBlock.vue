<template>
    <section class="map-block">
        <v-container class="d-flex flexOptionContaner mxw1200">
            <v-row class="addressRowSection d-none d-sm-flex">
                <v-col class="d-flex addressSection">
                    <p>{{addressItems.city}}</p>
                    <p>{{addressItems.address}}</p>
                    <p><b><a :href="`tel:${addressItems.numberLink}`">{{addressItems.number}}</a></b></p>
                    <p><a :href="`mailto:${addressItems.email}`">{{addressItems.email}}</a></p>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    name: 'MapBlock',
    props: ['addressItems'],
    data(){
        return{
            button: "Подпишитесь на рассылку"
        }
    }    
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
.map-block{
    width: 100%;
    height: 480px;
    display: flex;
    background-image: url(/img/mapOfficev2.jpg);
    background-position: center;
    background-size: auto;
    .flexOptionContaner{
        flex-direction: column;
        .addressRowSection{
            .addressSection{
                flex-direction: column;
                align-items: flex-end;
                justify-content: center;
                p{
                    text-align: right;
                    color: white;
                    padding: 0;
                    margin: 0 20px 0 0;
                }
                a{
                    color: white;
                    text-decoration: none;
                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
        }
        .buttonRowSection{
            height: 50px;
            .buttonSection{
                align-items: flex-end;
                justify-content: center;
            }
        }
    }
}

</style>