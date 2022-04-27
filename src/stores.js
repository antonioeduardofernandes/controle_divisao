import { writable } from "svelte/store"

export const funcoes = writable(["agente administrativo", "aosd", "enfermeira(o)", "técnico de enfermagem"])
export const setores = writable(["central de material e esterilização", "ambulatório infantil", "hemodinâmica"])

export const funcionarios = writable([])