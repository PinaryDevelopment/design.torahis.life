import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './types.css';

const meta = {
    title: 'Tokens',
};

export default meta;

type Story = StoryObj;

export const Typography: Story = {
    render: () => html`
        <h2>Typeface</h2>
        <div class="types-area">
            <section class="types">
                <h3>Oxygen</h3>
                <h6><a href="https://fonts.google.com/specimen/Oxygen">Google Fonts</a></h6>
                <div class="xxxxxl">The quick brown fox jumps over the lazy dog</div>
                <div class="xxxxl">The quick brown fox jumps over the lazy dog</div>
                <div class="xxxl">The quick brown fox jumps over the lazy dog</div>
                <div class="xxl">The quick brown fox jumps over the lazy dog</div>
                <div class="xl">The quick brown fox jumps over the lazy dog</div>
                <div class="lg">The quick brown fox jumps over the lazy dog</div>
                <div class="rg">The quick brown fox jumps over the lazy dog</div>
                <div class="sm">The quick brown fox jumps over the lazy dog</div>
                <div class="xs">The quick brown fox jumps over the lazy dog</div>
            </section>
            <section dir="rtl" class="types">
                <h3>בעלעפאיר</h3>
                <h6><a href="https://fonts.google.com/specimen/Bellefair">Google Fonts</a></h6>
                <div class="xxxxxl">זה הדבר אשר צוה יהוה לקטו ממנו איש לפי אכלו עמר לגלגלת מספר נפשתיכם איש לאשר באהלו תקחו</div>
                <div class="xxxxl">זה הדבר אשר צוה יהוה לקטו ממנו איש לפי אכלו עמר לגלגלת מספר נפשתיכם איש לאשר באהלו תקחו</div>
                <div class="xxxl">זה הדבר אשר צוה יהוה לקטו ממנו איש לפי אכלו עמר לגלגלת מספר נפשתיכם איש לאשר באהלו תקחו</div>
                <div class="xxl">זה הדבר אשר צוה יהוה לקטו ממנו איש לפי אכלו עמר לגלגלת מספר נפשתיכם איש לאשר באהלו תקחו</div>
                <div class="xl">זה הדבר אשר צוה יהוה לקטו ממנו איש לפי אכלו עמר לגלגלת מספר נפשתיכם איש לאשר באהלו תקחו</div>
                <div class="lg">זה הדבר אשר צוה יהוה לקטו ממנו איש לפי אכלו עמר לגלגלת מספר נפשתיכם איש לאשר באהלו תקחו</div>
                <div class="rg">זה הדבר אשר צוה יהוה לקטו ממנו איש לפי אכלו עמר לגלגלת מספר נפשתיכם איש לאשר באהלו תקחו</div>
                <div class="sm">זה הדבר אשר צוה יהוה לקטו ממנו איש לפי אכלו עמר לגלגלת מספר נפשתיכם איש לאשר באהלו תקחו</div>
                <div class="xs">זה הדבר אשר צוה יהוה לקטו ממנו איש לפי אכלו עמר לגלגלת מספר נפשתיכם איש לאשר באהלו תקחו</div>
            </section>
        </div>
    `,
    name: 'Typography'
};
