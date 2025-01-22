import { randomUUID } from "crypto";

export class IdGenerationService {
  generate() {
    return randomUUID()
  }
}