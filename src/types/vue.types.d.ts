import Vue from "vue";
import { AxiosInstance } from "axios";
import { LogdownBuilder } from "./logdown";

interface EventBus {
  $on(event: string | string[], callback: Function): this;

  $once(event: string | string[], callback: Function): this;

  $off(event?: string | string[], callback?: Function): this;

  $emit(event: string, ...args: any[]): this;
}

declare module "vue/types/vue" {
  interface VueConstructor {
    $createLogger: LogdownBuilder;
    $http: AxiosInstance;
    $eventBus: EventBus;
  }

  interface Vue {
    $createLogger: LogdownBuilder;
    $http: AxiosInstance;
    $eventBus: EventBus;
  }
}
