import {test, expect} from "vitest";
import { DoisPrimeiros } from "./DoisPrimeiros";

test("pegar dois primeiros elementos", () => {
    expect(DoisPrimeiros([2,4,6,2,8,9,5])).toEqual([2,4])
})