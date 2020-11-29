<template>
    <div>
        <v-container>
            <h1 class="text-center">Jackets</h1>
            <v-divider></v-divider>
            <div class="text-center ma-12">
                <v-progress-circular :size="200" color="primary" indeterminate v-if="isLoading"></v-progress-circular>
            </div>
        </v-container>

        <v-container>
            <div v-if="jackets.length > 0">
                <v-row class="ma-4">
                    <v-text-field clearable label="Searching..." v-model="filters.search"></v-text-field>
                </v-row>
                <v-card outlined>
                    <client-only>
                        <v-data-table :headers="tableHeaders" :items="formattedJackets" :search="filters.search" :items-per-page="40">
                            <template v-slot:[`item.name`]="{ item }">
                                {{ item.name }}
                            </template>
                            <template v-slot:[`item.color`]="{ item }">
                                {{ item.color }}
                            </template>
                            <template v-slot:[`item.price`]="{ item }">
                                {{ item.price }}
                            </template>
                            <template v-slot:[`item.manufacturer`]="{ item }">
                                {{ item.manufacturer }}
                            </template>
                            <template v-slot:[`item.availability`]="{ item }">
                                {{ item.availability }}
                            </template>

                        </v-data-table>
                 </client-only>
                </v-card>
            </div>
            <h4 v-if="jackets.length === 0 && !isLoading">No Jacket</h4>
        </v-container>
    </div>
</template>

<script>
import axios from "axios";
import { mdiCheckboxBlankOutline } from "@mdi/js";
import apis from "../api/index"

export default {
    head: () => ({
        title: "Jackets",
    }),
    data: () => ({
        isLoading: true,
        jackets: [],
        manufacturers: [],
        tableHeaders: [
            { text: "ID", value: "id" },
            { text: "Name", value: "name" },
            { text: "Color", value: "color" },
            { text: "Price", value: "price"},
            { text: "Manufacturer", value: "manufacturer"},
            { text: "Availability", value: "availability"}
        ],
        i: {
            mdiCheckboxBlankOutline,
        },
        filters: {
            search: ""
        }
    }),
    async mounted() {
        try {
            this.jackets = await apis.getJackets();
            this.jackets.forEach( jacket => {
                let avail = apis.getAvailability(jacket.manufacturer, jacket.id)
                jacket.availability = avail
            })
        } catch (err) {
            if (err.response) {
                console.error("Could not fetch jackets");
            }
        }
        this.isLoading = false;
    },
    computed: {
        formattedJackets() {
            return this.jackets.map((jacket) => {
                const u = { ...jacket };
                return u;
            });
        }
    }
}
</script>

<style scoped>
#create .v-speed-dial {
    position: absolute;
}

#create .v-btn--floating {
    position: relative;
}
</style>
