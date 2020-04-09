<template>
    <section class="faq-block mxw1200" id="faq">
        <v-container>
            <v-row class="height100">
                <v-col cols="12" sm="12">
                    <h2 class="headSection pb-3 secondaryColor" align="left">{{headSection}}</h2>
                    <v-expansion-panels value="1" flat class="px-0">
                        <v-expansion-panel v-for="(item, i) in answers" :key="`answer${i}`" active-class="active-primary" >
                            <v-expansion-panel-header class="px-0 elevation-2" >{{item.text}}</v-expansion-panel-header>
                            <v-expansion-panel-content class="px-0">
                                <div class="contentAnswer">
                                    <v-card class="mx-auto pa-2">
                                        <span class="phoneAnswer" v-html="item.answer"></span>
                                        <a class="phoneAnswer" v-if="item.phone" :href="`tel:${addressItems.numberLink}`">{{addressItems.number}}</a>
                                    </v-card>
                                </div>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
    export default {
        name: 'FaqBlock',
        props: ['addressItems'],
        data(){
            return {
                headSection: `FAQ`,
                answers: [
                    {id: 0, text: `Что такое блокчейн`,
                        answer: `Выстроенная по определённым правилам непрерывная последовательная цепочка блоков, содержащих информацию. Связь между блоками обеспечивается не только нумерацией, но и тем, что каждый блок содержит свою собственную хеш-сумму и хеш-сумму предыдущего блока.`,
                        phone: false},
                    {id: 1, text: `В чем состоит работа майнеров?`,
                        answer: `Основная суть майнинга сводится к решению сложных вычислительных задач методом подбора единственного правильного хэша, который является криптографическим шифром. Для этого майнеры используют ноды со специальным программным обеспечением, цель которых — подобрать правильный хэш.`,
                        phone: false},
                    {id: 2, text: `В чем отличие Proof Of Work от Proof Of Stake алгоритмов?`,
                        answer: `PoW-задачи изначально не предназначены для человека, их решение компьютером всегда достижимо в конечные сроки, однако требует больших вычислительных мощностей. При этом проверка полученного решения требует гораздо меньше ресурсов и времени. В подходе PoS ноды также пытаются хешировать данные в поисках результата меньше определенного значения, но сложность в данном случае распределяется пропорционально и в соответствии с балансом данного узла. Иными словами — в соответствии с количеством монет на счету пользователя.`,
                        phone: false},
                    {id: 3, text: `Какова доходность и цена устройства Acryl Node?`,
                        answer: `В среднем вознаграждение за размещение устройства составляет $150 ежемесячно. Цена устройства на данный момент $1500. <b> До 31 марта действует специальное предложение на покупку Acryl Node по старому курсу доллара.</b> Окупаемость наступает примерно на десятый месяц. Также доходность можно увеличить несколькими способами. Свяжись с нашим представителем для получения более развернутой информации:`,
                        phone: true},
                    {id: 4, text: `За счет чего формируется вознаграждение владельцам ACRYL NODE?`,
                        answer: `Держатели устройств Acryl Node формируют распределенную и устойчивую сеть для записи данных бизнеса, а клиенты B2B, в свою очередь, платят за использование блокчейн Acryl.`,
                        phone: false},
                    {id: 5, text: `Как заказать Acryl Node? Какой срок и условия доставки?`,
                        answer: `Заказать устройство можно, оставив заявку в форме обратной связи или позвонив по номеру: <a style="color: #3C3C40 !important; text-decoration: none;" href="tel:+78005113715">8 (800) 511-3715</a>. Наши сотрудники помогут вам с оформлением заказа, а также проконсультруют по любым вопросам.
Доставим ваш заказ БЕСПЛАТНО в течение 10 дней во все города, где осуществляет услуги транспортная компания СDЕК:  <a href="https://www.cdek.ru/">https://www.cdek.ru/</a>`,
                        phone: false},
                    {id: 6, text: `Какая сопутствующая документация предоставляется?`,
                        answer: `Да, конечно. Чтобы узнать подробности, необходимо связаться с нашим представителем b2b направления по номеру
                                <a style="color: #3C3C40 !important; text-decoration: none;" href="tel:+79678888555">+7-967-8888-555.</a>
                                Также информацию можно получить на сайте Acryl Enterprise.`,
                        phone: false},
                    {id: 7, text: `У меня уже есть Node, что делать дальше?`,
                        answer: `Да, конечно. Чтобы узнать подробности, необходимо связаться с нашим представителем b2b направления по номеру
                                <a style="color: #3C3C40 !important; text-decoration: none;" href="tel:+79678888555">+7-967-8888-555.</a>
                                Также информацию можно получить на сайте Acryl Enterprise.`,
                        phone: false},
                    {id: 8, text: `Какие возможны способы расчета?`,
                        answer: `Да, конечно. Чтобы узнать подробности, необходимо связаться с нашим представителем b2b направления по номеру
                                <a style="color: #3C3C40 !important; text-decoration: none;" href="tel:+79678888555">+7-967-8888-555.</a>
                                Также информацию можно получить на сайте Acryl Enterprise.`,
                        phone: false},
                    {id: 9, text: `Как выводить средства?`,
                        answer: `Да, конечно. Чтобы узнать подробности, необходимо связаться с нашим представителем b2b направления по номеру
                                <a style="color: #3C3C40 !important; text-decoration: none;" href="tel:+79678888555">+7-967-8888-555.</a>
                                Также информацию можно получить на сайте Acryl Enterprise.`,
                        phone: false},
                    {id: 10, text: `Я хочу стать представителем Acryl в своем городе. Это возможно? Какие условия для дилеров вы предоставляете? `,
                        answer: `Да, конечно. Мы рассматриваем возможность открытия новых дилерских центров в городах и странах , где еще не имеем представительства.
                                Об условиях подробную информацию можно получить, позвонив нам по номеру: `,
                        phone: true},
                    {id: 11, text: `Я являюсь представителем бизнеса. Могу ли я совершить запись данных в вашей сети?`,
                        answer: `Да, конечно. Чтобы узнать подробности, необходимо связаться с нашим представителем b2b направления по номеру
                                <a style="color: #3C3C40 !important; text-decoration: none;" href="tel:+79678888555">+7-967-8888-555.</a>
                                Также информацию можно получить на сайте Acryl Enterprise.`,
                        phone: false},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/styles/index.scss";
    .faq-block{
        width: 100%;
        display: flex;
        padding: 20px 10px;
        .mapImage{
            background-image: url(/img/FAQ_Node.png);
            width: 100%;
            min-height: 250px;
            @include respond-to(medium-screens) {
                max-height: 300px;
                min-height: 300px;
            }
            height: 100%;
            background-position: top center;
            background-repeat: no-repeat;
            background-size: contain;
        }
    }
    .contentAnswer{
        margin-left: -24px;
        margin-right: -24px;
        a{
            color: $secondaryColor !important;
            text-decoration: none;
        }
    }
    .active-primary{
        button{
            color: $primaryTextColor;
        }
    }
    .height100{
        height: 100%;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }
</style>