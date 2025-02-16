import { render, screen } from "@testing-library/react";
import axios from 'axios';

import Users from "./Users";

jest.mock('axios');

describe("Users test", () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "John Doe",
        },
        {
          id: 2,
          name: "Jane Doe",
        },
        {
          id: 3,
          name: "Yan Doe",
        },
      ],
    };
  })
  test("renders users", async () => {
    axios.get.mockReturnValue(response);
 
    render(<Users />);

    const users = await screen.findAllByTestId("user-item");
    expect(users).toHaveLength(3);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
})