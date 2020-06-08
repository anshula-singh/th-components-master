import { useEffectAttr } from "../useEffectAttr";

describe("useEffectAttr", () => {
  it("does not invoke the function repeatedly dependencies havent changed", async () => {
    const spy = jest.fn();
    class Container {
      foo = 10;
      bar = 20;

      fetchData = useEffectAttr(spy, ["foo", "bar"], this);
    }

    const obj = new Container();
    obj.fetchData();
    obj.fetchData();
    obj.fetchData();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("invokes the function when dependencies change", async () => {
    const spy = jest.fn();
    class Container {
      foo = 10;
      bar = 20;

      fetchData = useEffectAttr(spy, ["foo", "bar"], this);
    }

    const obj = new Container();
    obj.fetchData();
    obj.fetchData();
    expect(spy).toHaveBeenCalledTimes(1);
    obj.foo = 100; // Update to new value
    obj.fetchData();
    expect(spy).toHaveBeenCalledTimes(2);
    obj.fetchData();
    obj.fetchData();
    expect(spy).toHaveBeenCalledTimes(2);
    obj.foo = 10; // Update to initial value
    obj.fetchData();
    expect(spy).toHaveBeenCalledTimes(3);
  });
});
