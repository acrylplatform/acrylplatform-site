<template>
    <section>
        <v-container style="max-width: 1185px;">
            <h2 class="headSection pb-3 secondaryColor" align="left">Сравнение PoS и PoW</h2>
            <table class="elevation-1" style="width:100%; background: #e9e9e9">

            <tr>
                <th align="left">АЛГОРИТМ</th>
                <th align="left">POS (ACRYL)</th>
                <th align="left">POW (ASIC)</th>
            </tr>
            <tr>
                <td>Потребление</td>
                <td class="tdb">~ 60 Вт</td>
                <td>~ 3000 Вт</td>
            </tr>
            <tr>
                <td>Уровень шума</td>
                <td class="tdb">~ 0,5 - 1,5 дБА</td>
                <td>~ 80 дБА</td>
            </tr>
                <tr>
                    <td>Требуется охлаждение</td>
                    <td class="tdb">Нет</td>
                    <td>Да</td>
                </tr>
                <tr>
                    <td>Масса</td>
                    <td class="tdb">~ 1 кг</td>
                    <td>~ 10 кг</td>
                </tr>
                <tr>
                    <td>Размеры</td>
                    <td class="tdb">200 x 35 x 200 мм</td>
                    <td>298 x 175 x 304 мм</td>
                </tr>
                <tr>
                    <td>Участие в pool / Пониманимание протоколов</td>
                    <td class="tdb">Нет</td>
                    <td>Да</td>
                </tr>
                <tr>
                    <td>Тонкая настройка</td>
                    <td class="tdb">Нет</td>
                    <td>Да</td>
                </tr>
            </table>
        </v-container>
    </section>
</template>

<script>

</script>

<style>
    th, td {
        padding: 15px;
    }
    .tdb {
        font-weight: bold;
    }
</style>