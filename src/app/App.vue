<template>
  <div id="app">
    <bal-navbar>
      <span slot="navbar-brand">
        <img
          src="https://github.com/baloise/ui-library/raw/master/docs/assets/images/icon.svg"
        />
      </span>
      <div slot="navbar-start" class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/about">About</router-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">English</a>
          <div class="navbar-dropdown">
            <a class="navbar-item">English</a>
            <a class="navbar-item">German</a>
          </div>
        </div>
      </div>
      <div slot="navbar-end" class="navbar-item">
        <bal-button inverted>Increase</bal-button>
      </div>
    </bal-navbar>
    <router-view />
  </div>
</template>
