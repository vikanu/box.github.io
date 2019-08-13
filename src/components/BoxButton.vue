<template>
 <button
  @click="onClick"
  @dblclick="onDoubleClick"
  :class="[
   'box-button',
   'box-button--' + color,
   'box-button--' + size,
   {
    'box-button--rounded': rounded
   }
  ]"
 >
  <slot></slot>
 </button>
</template>
<script>
export default {
 props: {
  color: {
   type: String,
   default: "blue",
   validator(x) {
     return ["blue", "green", "red", "grey"].indexOf(x) !== -1;
   }
  },
  rounded: {
   type: Boolean,
   default: true
  },
  size: {
   type: String,
   default: "default",
   validator(x) {
    return ["small", "default", "large"].indexOf(x) !== -1;
   }
  },
 },

 methods: {
  onClick(event) {
   this.$emit("click", event);
  },

  onDoubleClick(event) {
   this.$emit("dblclick", event);
  },
 }
};
</script>
<style>
.box-button {
 display: inline-block;
 outline: 0;
 border: 1px solid rgba(0, 0, 0, 0.1);
 color: #ffffff;
 font-weight: 500;
 font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
 user-select: none;
 cursor: pointer;
}

/* --> COLORS <-- */

.box-button--blue {
 background-color: #4c79ce;
}

.box-button--green {
 background-color: #30eb4c;
}

.box-button--red {
 background-color: #f31734;
}

.box-button--grey {
 background-color: #8f8687;
}

/* --> SIZES <-- */

.box-button--small {
 padding: 8px 10px;
 border-radius: 4px;
 font-size: 12px;
 line-height: 12px;
}

.box-button--default {
 padding: 12px 14px;
 border-radius: 6px;
 font-size: 14px;
 line-height: 16px;
}

.box-button--large {
 padding: 16px 18px;
 border-radius: 8px;
 font-size: 16px;
 line-height: 20px;
} 

/* --> BOOLEANS <-- */

.box-button--rounded {
 border-radius: 60px;
}
</style>