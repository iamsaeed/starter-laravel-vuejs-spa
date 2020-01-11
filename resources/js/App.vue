<template>
    <div>
        <router-link
            tag="a"
            :to="{name:'dashboard'}"
            exact
            href="#"
        >Dashboard</router-link>
        <router-link
            tag="a"
            :to="{name:'about'}"
            exact
            href="#"
        >About Us</router-link>
        <router-view> </router-view>
    </div>
</template>
