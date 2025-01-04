import type { PlantsState } from './plantsStore';

export const nextIdSelector = (state: PlantsState) => state.nextId;
export const plantsSelector = (state: PlantsState) => state.plants;

export const addPlantActionSelector = (state: PlantsState) => state.addPlant;
export const removePlantActionSelector = (state: PlantsState) => state.removePlant;
export const waterPlantActionSelector = (state: PlantsState) => state.waterPlant;
