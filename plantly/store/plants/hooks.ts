import { usePlantStore } from './plantsStore';
import {
  addPlantActionSelector,
  nextIdSelector,
  plantsSelector,
  removePlantActionSelector,
  waterPlantActionSelector
} from './selector';

export const useNextId = () => usePlantStore(nextIdSelector);
export const usePlants = () => usePlantStore(plantsSelector);

export const useAddPlant = () => usePlantStore(addPlantActionSelector);
export const useRemovePlant = () => usePlantStore(removePlantActionSelector);
export const useWaterPlant = () => usePlantStore(waterPlantActionSelector);
