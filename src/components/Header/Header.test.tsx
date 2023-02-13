import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Header from '.';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import userEvent from '@testing-library/user-event';

describe('Header', () => {
  const queryClient = new QueryClient();
  const { queryByPlaceholderText, container } = render(
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Header />
      </QueryClientProvider>
    </RecoilRoot>,
  );

  it('test placeholder text', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(queryByPlaceholderText('할 일을 입력하세요'));
  });

  it('test adding todo', async () => {
    render(
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Header />
        </QueryClientProvider>
      </RecoilRoot>,
    );
    const input = screen.getByPlaceholderText('할 일을 입력하세요');

    fireEvent.change(input, { target: { value: 'hi' } });

    expect(queryByPlaceholderText('bye'));
  });
});
