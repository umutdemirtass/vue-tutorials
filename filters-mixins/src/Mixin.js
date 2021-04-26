export const mixin = {
    computed: {
        reverse() {
          return this.text.split("").reverse().join("");
        },
        length(){
          return this.text + "(" + this.text.length + ")";
        }
      }
}