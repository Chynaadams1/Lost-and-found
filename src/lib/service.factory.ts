import { mockService } from "./service.mock";
import type { LostFoundService } from "./service";

// For now we always use mock (backend isn’t ready)
export const service: LostFoundService = mockService;
