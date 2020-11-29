<template>
    <div>
        <v-container>
            <h1 class="text-center">Shirts</h1>
            <v-divider></v-divider>
            <div class="text-center ma-12">
                <v-progress-circular :size="200" color="primary" indeterminate v-if="isLoading"></v-progress-circular>
            </div>
        </v-container>

        <v-container>
            <div v-if="shirts.length > 0">
                <v-row class="ma-4">
                    <v-text-field clearable label="Searching..." v-model="filters.search"></v-text-field>
                </v-row>
                <v-card outlined>
                     <client-only>
                        <v-data-table :headers="tableHeaders" :items="formattedShirts" :search="filters.search" :items-per-page="40">
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
            <h4 v-if="shirts.length === 0 && !isLoading">No shirt</h4>
        </v-container>
    </div>
</template>

<script>
import axios from "axios";
import { mdiCheckboxBlankOutline } from "@mdi/js";
import apis from "../api/index"

export default {
    head: () => ({
        title: "Shirts",
    }),
    data: () => ({
        isLoading: true,
        shirts: [],
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
            this.shirts = await apis.getShirts();
            this.shirts.forEach( shirt => {
                let avail = apis.getAvailability(shirt.manufacturer, shirt.id)
                shirt.availability = avail
            })
        } catch (err) {
            if (err.response) {
                console.error("Could not fetch jackets");
            }
        }
        this.isLoading = false;
    },
    computed: {
        formattedShirts() {
            return this.shirts.map((shirt) => {
                const u = { ...shirt };
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
