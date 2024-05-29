export const getComments = async () => {
    return [
      {
        id: "1",
        body: "Great website!!",
        username: "Jack",
        userId: "1",
        parentId: null,
        createdAt: "2024-04-16T23:00:33.010+02:00",
      },
      {
        id: "2",
        body: "So nice! cheap prices",
        username: "John",
        userId: "2",
        parentId: null,
        createdAt: "2024-04-16T23:00:33.010+02:00",
      },
      {
        id: "3",
        body: "Thanks, we are happy to help",
        username: "AirDNL",
        userId: "2",
        parentId: "1",
        createdAt: "2024-04-16T23:00:33.010+02:00",
      },
      {
        id: "4",
        body: "Thank you so much!",
        username: "AirDNL",
        userId: "2",
        parentId: "2",
        createdAt: "2024-04-16T23:00:33.010+02:00",
      },
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "Тут надо сделать через кукис чтобы ты регался и подсвечивало твое имя!!",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };