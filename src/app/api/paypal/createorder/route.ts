import client from '@/lib/paypal';
import paypal from '@paypal/checkout-server-sdk';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const requestBody = await req.json();
  if (!req.body || !requestBody?.order_price || !requestBody.user_id)
    return NextResponse.json({ success: false, message: 'Please Provide order_price And User ID' }, { status: 400 });

  try {
    const PaypalClient = client();
    //This code is lifted from https://github.com/paypal/Checkout-NodeJS-SDK
    const request = new paypal.orders.OrdersCreateRequest();
    request.headers['Prefer'] = 'return=representation';
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: requestBody?.order_price + '',
          },
        },
      ],
    });
    const response = await PaypalClient.execute(request);
    if (response.statusCode !== 201) {
      console.log('RES: ', response);
      return NextResponse.json({ success: false, message: 'Some Error Occured at backend' }, { status: 500 });
    }

    // Your Custom Code for doing something with order
    // Usually Store an order in the database like MongoDB
    console.log('check response', response);
    const order = {
      order_id: response.result.id,
      order_price: response.result.purchase_units[0].amount.value,
      user_id: requestBody.user_id,
    };

    return NextResponse.json({ success: true, data: { order } }, { status: 200 });
  } catch (err) {
    console.log('Err at Create Order: ', err);
    return NextResponse.json({ success: false, message: 'Could Not Found the user' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ success: false, message: 'Not Found hohoho' }, { status: 404 });
}
